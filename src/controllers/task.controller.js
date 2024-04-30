import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(404).json({message: "No se encontraron tareas"})
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });

  const saveTask = await newTask.save();
  res.json(saveTask);
  } catch (error) {
    return res.status(404).json({message: "No se pudo crear la tarea"})
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ mesage: "Tarea no encontrada" });
  res.json(task);
  } catch (error) {
    return res.status(404).json({message: "Tarea no encontrada"})
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
  if (!task)
    return res
      .status(404)
      .json({ mesage: "Tarea no encontrada para poder eliminar" });

  return res.status(204).json({ message: "Tarea eliminada" })
  } catch (error) {
    return res.status(404).json({message: "Tarea no encontrada"})
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task)
      return res
        .status(404)
        .json({ mesage: "Tarea no encontrada para actualizar" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({message: "Tarea no encontrada"})
  }
};
