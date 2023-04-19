import { useState } from 'react'

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import ThemeSwitcher from './components/ThemeSwitcher'
import TodoList from './components/TodoList'


function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  return (
    <div className="container">
      <header>
        <h1>Control de Tareas</h1>
        <hr />
      </header>
      <ThemeSwitcher />
      <TodoList />
    </div>
  )
}

export default App
