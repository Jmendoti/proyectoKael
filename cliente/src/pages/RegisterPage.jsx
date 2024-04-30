import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singUp(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="flex item-center justify-center shadow-md shadow-indigo-500/50">
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white my-2 text-center" key={i}>
              {error}
            </div>
          ))}

          <h1 className="text-3xl font-bold my-2 text-center">Registrarse</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Usuario"
            />
            {errors.username && (
              <p className="text-red-500">Usuario es Requerido</p>
            )}
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
               Registrarse 
            </button>

            <p className="flex gap-x-2 justify-between">
              ¡Tienes cuenta!{" "}
              <Link to="/login" className="text-sky-500 hover:text-sky-900">
                Logueate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
