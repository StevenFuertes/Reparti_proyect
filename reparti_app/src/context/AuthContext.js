import { createContext, useState } from "react";

import { getUsers } from "../services";


export const AuthContext = createContext();

export const AuthProvider = (props) => {

	const { children } = props;

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) ?? {}
	  );

	async function login(email, password) {
		// Traemos toda la data de los usuarios de mockapi:
		const usersDB = await getUsers();
		// Buscamos dentro de usersDB, el email y password:
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

	// funcion para validar si la session existe
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