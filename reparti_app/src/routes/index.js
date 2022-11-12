import { BrowserRouter, Routes, Route } from "react-router-dom";
// Vistas
import {
    HomeView,
    ProfileView,
    TaskView,
    LoginView,
    SignUpView,
    TodoAppView,
} from "../pages";

import { MainLayout } from "../layouts";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/todoapp" element={<TodoAppView />} />
                    <Route path="/perfil" element={<ProfileView />} />
                    <Route path="/task/:id" element={<TaskView />} />
                </Route>
                <Route path="/login" element={<LoginView />} />
                <Route path="/signup" element={<SignUpView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
