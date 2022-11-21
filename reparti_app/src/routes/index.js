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
} from "../pages";

import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landpage" element={<LandPageView />} />
        <Route element={<MainLayout />}>
          <Route path="/Post" element={<PostRepartiView />} />
          <Route path="/Search" element={<SearchView />} />
          <Route path="/perfil" element={<ProfileView />} />
          <Route path="/" element={<HomeView />} />
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
