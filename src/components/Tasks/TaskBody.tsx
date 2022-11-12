import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContexts";
import { TaskList } from "./TaskList";

export function TaskBody() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask(event: any) {
    event.preventDefault();
    if (!newTaskTitle) {
      return alert("Informar um valor para a Task!");
    }
    const newTask = {
      id: Math.random(),
      taskTitle: newTaskTitle,
      isComplete: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
    console.log(tasks);
  }
  console.log(tasks);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <form
            className="text-gray100 flex items-center "
            onSubmit={handleCreateNewTask}
          >
            <input
              placeholder="Adicione uma nova tarefa"
              className="p-4 rounded-lg min-w-[638px] h-14 bg-gray500"
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-dark text-gray100 w-[90px] h-full ml-2 relative"
            >
              Criar
            </button>
          </form>
        </div>

        <div className="mt-[64px] w-full">
          <TaskList />
        </div>
      </div>
    </>
  );
}
