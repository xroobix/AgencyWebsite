import './App.css';
import { About } from './Components/About/About';
import { Blog } from './Components/Blog/Blog';
import { Counter } from './Components/Counter/Counter';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Services } from './Components/Services/Services';
import { Team } from './Components/Team/Team';
import { Testimonial } from './Components/Testimonial/Testimonial';

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
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
