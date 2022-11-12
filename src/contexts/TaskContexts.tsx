import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface tasks {
  id: number;
  taskTitle: string;
  isComplete: boolean;
}

interface taskContextProps {
  tasks: tasks[];
  setTasks: Dispatch<SetStateAction<tasks[]>>;
}

interface tasksProvider {
  children: ReactNode;
}

export const TaskContext = createContext({} as taskContextProps);

export function TaskContenxtProvider({ children }: tasksProvider) {
  const [tasks, setTasks] = useState<tasks[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
