import '../src/style/global.css'
import { Header } from './components/Header/Header'
import { TaskBody } from './components/Tasks/TaskBody'
import { TaskList } from './components/Tasks/TaskList'

export function App() {


  return (
    <>
    <div className=''>
    <Header/>
    <div className="flex items-center justify-center relative top-[-27px] ">
      <TaskBody/>
    </div>
    </div>
    
    </>
  )
}


