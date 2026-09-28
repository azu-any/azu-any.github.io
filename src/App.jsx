import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:text-primary focus:font-bold rounded-lg">
          Skip to content
        </a>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {<Feedbacks />}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <footer className="bg-black-100 text-white text-center py-10">
          <p>&copy; 2024 - Designed and developed by <a href="
          https://www.linkedin.com/in/azuany-mila" target="_blank" rel="noreferrer">Azuany Mila Ceron</a></p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App
