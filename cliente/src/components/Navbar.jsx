import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";




function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 w-max-[600px] rounded-lg shadow-indigo-500/50">
      <h4 className="text-2xl font-bold">
        <Link to= {
          isAuthenticated ? "/tasks" : "/"
        } >Med | Dragones Marinos</Link>
      </h4>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="text-purple-500 hover:text-fuchsia-600 transition-transform hover:scale-110">Hola {user.username} </li>
            <li className="active:translate-y-1">
              <Link
                to="/add-tasks"
                className="bg-indigo-500 px-4 py-1 rounded-md "
              >
                Nueva Tarea
              </Link>
            </li>
            
            <li className="active:translate-y-1">
              <Link
                to="/profile"
                className="bg-indigo-500 px-4 py-1 rounded-md "
              >
                Perfil
              </Link>
            </li>

            <li className="active:translate-y-1">
              <Link
                to="/"
                className="bg-indigo-500 px-4 py-1 rounded-md active:translate-y-1"
                onClick={() => {
                  logout();
                }}
              >
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-md active:translate-y-1">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-md active:translate-y-1"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
