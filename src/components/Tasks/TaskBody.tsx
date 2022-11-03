import { useState } from "react";
import { TaskList } from "./TaskList";

export function TaskBody(){

    const [newTask, setNewTask] = useState('')

    // function HandleCreateNewTask(){
    //     event?.preventDefault()
    //     const novaTask = event.target.form.value
    //     setNewTask(novaTask)
    //     console.log(novaTask)
    // }
    return(
        <>
        <div className="flex flex-col">
        <div className="flex">
            <form  className='text-gray100'>
            <textarea name='form' placeholder="Adicione uma nova tarefa" className="p-4 rounded-lg min-w-[638px] h-14 bg-gray500"/>
                <button type="submit" className="rounded-lg bg-blue-dark text-gray100 w-[90px] h-[52px] ml-2 relative bottom-6">
                    Criar 
                </button>
            </form>
        </div>

        <div className="mt-[64px]">

        <TaskList taskContent={newTask} taskHasComplete=''/>

        </div>

        </div>
        </>
    )
}