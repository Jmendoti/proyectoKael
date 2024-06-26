import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EditProfilePage from "./pages/EditProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/tasksContext";





function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar /> 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />                
                <Route path="/add-tasks" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />  
                <Route path="/profile/:id" element={<EditProfilePage />} />              
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
