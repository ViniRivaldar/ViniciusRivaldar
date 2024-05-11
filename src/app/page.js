import About from "./components/About";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Portifolio from "./components/Portifolio";
import Technology from "./components/Technology";

export default function Home() {
  return (
    <>
      
      <header className="bg-branco fixed top-0 w-full z-50">
        <NavBar/>
      </header>
      <main className="flex-grow">
        <Inicio/>
        <About/>
        <Technology/>
        <Certificate/>
        <Portifolio/>
      </main>
      <footer className="bg-azul mt-auto">
        <Footer/>
      </footer>
    </>
    
  )
}
