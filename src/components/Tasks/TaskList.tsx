import { ClipboardText } from "phosphor-react";
import { useState } from "react";
import { Tasks } from "./Tasks";

interface tasks{
    taskContent: string;
    taskHasComplete: string;
}

export function TaskList({taskContent, taskHasComplete} : tasks) {
  const [contador, SetContador] = useState(['']);
  SetContador([...contador, taskContent])

  return (
    <>
      <div>
        <div className="flex content-between justify-between pb-6">
          <div className="flex">
            <p className="text-bold text-md text-blue">Tarefas Criadas</p>
            <p className="ml-4 border-2-none pl-2 pr-2 pt-1 pb-1 rounded-[40%] bg-gray700 text-bold  text-gray100 text-lg relative top-[-9px] ">
              0
            </p>
          </div>

          <div className="flex">
            <p className="text-bold text-md text-purple">Concluídas</p>
            <p className="ml-4 border-2-none pl-2 pr-2 pt-1 pb-1 rounded-[40%] bg-gray700 text-bold text-gray100 text-lg relative top-[-9px] ">
              0
            </p>
          </div>
        </div>

       
         
            
              <div className="min-h-[244px] flex flex-col items-center content-center border-t pt-16 pb-16 pl-6 pr-6">
                <ClipboardText className="h-[54px] w-[54px]" />

                <p className="text-bold text-gray300 ">
                  Você ainda não tem tarefas cadastradas
                </p>
                <p className="text-gray300 ">
                  clique aqui e organize seus itens a fazer
                </p>
              </div>
           
           
        
      </div>
    </>
  );
}
