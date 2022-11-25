import { BrowserRouter, Routes, Route } from "react-router-dom";
// Vistas
import {
  HomeView,
  LoginView,
  SignUpView,
  LandPageView,
  ProfileView,
  SearchView,
  PostRepartiView,
  ContactView,
} from "../pages";

import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPageView />} />
        <Route element={<MainLayout />}>
          <Route path="/Contact" element={<ContactView />} />
          <Route path="/Post" element={<PostRepartiView />} />
          <Route path="/Search" element={<SearchView />} />
          <Route path="/perfil" element={<ProfileView />} />
          <Route path="/home" element={<HomeView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignUpView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// {/* <Route path="/todoapp" element={<TodoAppView />} />

// <Route path="/task/:id" element={<TaskView />} /> */}
