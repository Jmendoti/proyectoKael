import { useForm } from "react-hook-form";
import { useTasks } from "../context/tasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

//para modificar el formato fecha
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);


function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        // console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"))
      }
    }
    loadTask();
  });

  const onSubmit = handleSubmit((data) => {
    const dataValidate = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    }   

    //console.log(dataValidate)
    
    if (params.id) {
      updateTask(params.id, dataValidate);
    } else {
      createTask(dataValidate);
    }

    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-5 rounded-md my-2 shadow-md shadow-indigo-500/50">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="description">Descripcion</label>
          <textarea
            rows="3"            
            placeholder="Descripcion"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
          ></textarea>

          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="w-full bg-indigo-500 hover:bg-indigo-800 px-3 py-2 rounded-md my-2 active:translate-y-1">
            Guardar
          </button>
          <button className="w-full bg-red-400 hover:bg-red-700 px-3 py-2 rounded-md my-2 active:translate-y-1">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
