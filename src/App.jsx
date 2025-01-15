import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
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
