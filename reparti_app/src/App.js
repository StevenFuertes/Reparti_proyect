import Router from "./routes";
import {AuthProvider} from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
