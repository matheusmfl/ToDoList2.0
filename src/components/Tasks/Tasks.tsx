import { ClipboardText, Trash } from "phosphor-react";
import { useContext } from "react";
import { TaskContext, tasks } from "../../contexts/TaskContexts";

interface Itasks {
  tasksLength: number;
}

export function Tasks({ tasksLength }: Itasks) {
  const { tasks, setTasks } = useContext(TaskContext);

  function handleCompleteTask(id: number) {
    const activeTask = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTasks(activeTask);
    console.log(activeTask);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => {
      if (task.id !== id) {
        return [task];
      }
    });
    setTasks(updatedTasks);
  }

  if (tasksLength < 1) {
    return (
      <div className="min-h-[244px] flex flex-col items-center content-center border-t pt-16 pb-16 pl-6 pr-6">
        <ClipboardText className="h-[54px] w-[54px]" />

        <p className="text-bold text-gray300 ">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-gray300 ">
          clique aqui e organize seus itens a fazer
        </p>
      </div>
    );
  } else {
    return (
      <table className="w-full">
        <thead>
          <tbody className="flex flex-col gap-2">
            {tasks.map((task) => {
              return (
                <tr
                  className="h-20 bg-gray500 flex flex1 items-center rounded-lg w-full text-gray100 p-4 gap-3"
                  key={task.id}
                >
                  <input
                    type="checkbox"
                    onClick={() => handleCompleteTask(task.id)}
                  />
                  <span className="flex-1">{task.taskTitle}</span>
                  <Trash
                    onClick={() => handleDeleteTask(task.id)}
                    className="cursor-pointer"
                  />
                </tr>
              );
            })}
          </tbody>
        </thead>
      </table>
    );
  }
}
