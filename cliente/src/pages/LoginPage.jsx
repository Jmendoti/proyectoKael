import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singIn, errors: singinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">     
      
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md shadow-md shadow-indigo-500/50">
        {singinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}        
        
        <h1 className="text-3xl font-bold my-3 text-center py-2 px-4">Iniciar Sesion</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email es Requerido</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password es Requerido</p>
          )}
          <button type="submit" className="w-full bg-sky-400 hover:bg-sky-700 text-black px4 py2 my-2 rounded-md">
            Ingresar
          </button>

          <p className="flex gap-x-2 justify-between">
            ¡No tienes usuario!{" "}
            <Link to="/register" className="text-sky-500 hover:text-sky-900">
              Registrate
            </Link>
          </p>
        </form>
      </div>
      
    </div>
  );
}

export default LoginPage;
