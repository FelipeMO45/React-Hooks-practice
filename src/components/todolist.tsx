import React, { useReducer, useMemo, useCallback, FormEvent } from 'react';
import '../App.css';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};


const initialTasks: Task[] = [
  { id: 1, title: 'Terminar mis tareas', completed: false },
  { id: 2, title: 'Avanzar el proyecto', completed: true },
  { id: 3, title: 'Estudiar para el exámen de git', completed: false }
];

type Action =
  | { type: 'ADD_TASK'; payload: { id: number; title: string } }
  | { type: 'DELETE_TASK'; payload: { id: number } }
  | { type: 'TOGGLE_COMPLETED'; payload: { id: number } };


function tasksReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: action.payload.id, title: action.payload.title, completed: false }];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload.id);
    case 'TOGGLE_COMPLETED':
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}

const ToDoList: React.FC = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const addTask = useCallback((title: string) => {
    const newTaskId = tasks.length + 1;
    dispatch({ type: 'ADD_TASK', payload: { id: newTaskId, title } });
  }, [tasks]);

  const deleteTask = useCallback((id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  }, []);

  const toggleCompleted = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: { id } });
  }, []);

  const completedTasksCount = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTaskTitle = formData.get('task') as string;
    addTask(newTaskTitle);
    e.currentTarget.reset();
  }, [addTask]);

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <input type="text" name="task" placeholder="Nueva tarea..." />
        <button type="submit">Agregar tarea</button>
      </form>
      <p className="completed-count">Tareas completadas: {completedTasksCount}</p>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
