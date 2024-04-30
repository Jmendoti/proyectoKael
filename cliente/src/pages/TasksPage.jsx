import { useEffect, useState } from "react";
import { useTasks } from "../context/tasksContext.jsx";
import TaskCard from "../components/TaskCard.jsx";
import Pagination from "../components/PaginationItem.jsx";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  const maximo = tasks.length / porPagina;

  let filteredTasks = tasks.filter(tasks =>
    tasks.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortByDate) {
    filteredTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="container shadow-md shadow-indigo-500 ">
      <div className="flex">
        <button
          onClick={() => setSortByDate(!sortByDate)}
          className="text-indigo-600 bg-white p-1 justify-items-start rounded-md shadow-md shadow-indigo-600 border-indigo-600"
        >
          Ordenar por fecha
        </button>
        <input
          type="text"
          placeholder=" Buscar..."
          onChange={event => setSearchTerm(event.target.value)}
          className="text-indigo-600 p-1 justify-items-end rounded-md shadow-md shadow-indigo-600 border-indigo-600 ml-auto"
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-3">
        {filteredTasks
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
      </div>

      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}

export default TasksPage;
