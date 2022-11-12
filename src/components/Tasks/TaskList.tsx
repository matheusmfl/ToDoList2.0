import { ClipboardText } from "phosphor-react";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContexts";
import { Tasks } from "./Tasks";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  const taskLength = tasks.length;

  const taskCompletes = tasks.reduce(
    (acc, task) => {
      if (task.isComplete) {
        acc.isComplete += 1;
      }
      return acc;
    },
    {
      isComplete: 0,
    }
  );

  return (
    <>
      <div>
        <div className="flex content-between justify-between pb-6">
          <div className="flex">
            <p className="text-bold text-md text-blue">Tarefas Criadas</p>
            <p className="ml-4 border-2-none pl-2 pr-2 pt-1 pb-1 rounded-[40%] bg-gray700 text-bold  text-gray100 text-lg relative top-[-9px] ">
              {taskLength}
            </p>
          </div>

          <div className="flex">
            <p className="text-bold text-md text-purple">Concluídas</p>
            <p className="ml-4 border-2-none pl-2 pr-2 pt-1 pb-1 rounded-[40%] bg-gray700 text-bold text-gray100 text-lg relative top-[-9px] ">
              {`${taskCompletes.isComplete} de ${taskLength}`}
            </p>
          </div>
        </div>
        {/* <div className="min-h-[244px] flex flex-col items-center content-center border-t pt-16 pb-16 pl-6 pr-6">
          <ClipboardText className="h-[54px] w-[54px]" />

          <p className="text-bold text-gray300 ">
            Você ainda não tem tarefas cadastradas
          </p>
          <p className="text-gray300 ">
            clique aqui e organize seus itens a fazer
          </p>
        </div> */}

        <Tasks tasksLength={taskLength} />
      </div>
    </>
  );
}
