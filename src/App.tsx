import "../src/style/global.css";
import { Header } from "./components/Header/Header";
import { TaskBody } from "./components/Tasks/TaskBody";
import { TaskContenxtProvider } from "./contexts/TaskContexts";

export function App() {
  return (
    <TaskContenxtProvider>
      <Header />
      <div className="flex items-center justify-center mt-[-28px] ">
        <TaskBody />
      </div>
    </TaskContenxtProvider>
  );
}
