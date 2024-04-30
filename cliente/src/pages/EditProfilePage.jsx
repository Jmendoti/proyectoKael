import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProfilePage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { getProfile, errors: registerErrors, updateProfile } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    try {
      async function loadProfile() {
        if (params.id) {
          const user = await getProfile(params.id);
          console.log(user);
          setValue("username", user.username);
          setValue("email", user.email);
        }
      }
      loadProfile();
    } catch (error) {
      res.status(500).json({message: "Id no enviado"})
    }
    
  });

  const onSubmit = handleSubmit((data) => {
    const dataValidate = {
      ...data,
    };

    console.log(dataValidate);

    if (params.id) {
      updateProfile(params.id, dataValidate);
    }

    navigate("/profile");
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

          <h1 className="text-3xl font-bold my-2 text-center">Actualizar</h1>
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
            

            
            <button
              type="submit"
              className="w-full bg-sky-400 hover:bg-sky-700 text-black px4 py2 my-2 rounded-md"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
