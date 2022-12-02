import { createContext, useState } from "react";

import { getUsers } from "../services";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {}
  );

  async function login(email, password) {
    const usersDB = await getUsers();
    const user = usersDB.find(
      (userDb) => userDb.email === email && userDb.pass === password
    );

    if (!user) return false;
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    return true;
  }

  function logout() {
    localStorage.clear();
    setUser({});
  }

  function isAuth() {
    return Object.entries(user).length !== 0;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
