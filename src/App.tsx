import './App.css';
import { About } from './Components/About/About';
import { Blog } from './Components/Blog/Blog';
import { Counter } from './Components/Counter/Counter';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Services } from './Components/Services/Services';
import { Team } from './Components/Team/Team';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
    </>
  );
}

export default App;
