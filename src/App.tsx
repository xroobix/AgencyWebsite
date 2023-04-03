import './App.css';
import { Counter } from './Components/Counter/Counter';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
    </>
  );
}

export default App;
