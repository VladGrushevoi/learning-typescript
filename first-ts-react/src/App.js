import './App.css';
import { Counter } from './components/counter/Counter.tsx';
import { Title } from './components/title/Title.tsx'
function App() {
  return (
    <>
      <Title Name='Vlad' Age={23} />
      <Counter />
    </>
  );
}

export default App;
