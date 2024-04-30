import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <div className="flex p-6 font-mono">
      <div className="flex-none w-48 h-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-indigo-900 before:rounded-md">
        <img
          src="/img/zyro-image.png"
          alt=""
          className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <form className="flex-auto pl-6">
        <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
          <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
            Nombre: {user.username}
          </h1>
          <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
            Email: {user.email}
          </h1>
        </div>

        <div className="flex space-x-2 mb-4 text-sm font-medium">
          <div className="flex space-x-4">
            <button
              className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black rounded-md"
              type="submit"
            >
              <Link to={`/profile/${user.id}`}>Editar</Link>{" "}
            </button>

            <div className="flex space-x-4">
              <button
                className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black rounded-md"
                type="submit"
              >
                <Link to={`/`} onClick={() => {
                  logout();
                }}>
                  Cerrar
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
