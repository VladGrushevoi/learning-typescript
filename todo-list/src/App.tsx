import { Header } from "./components/Header/Header"
import { TodoList } from "./components/TodoList/TodoList"
import { Todos } from "./data/Todo"

function App() {
  return (
    <>
     <Header />
     <TodoList TodoList={Todos} />
    </>
  )
}

export default App
