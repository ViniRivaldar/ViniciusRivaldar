'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
    return(
        <section className="flex justify-between items-center mr-8 ml-8 mt-5">
            <nav>
                <ul className="flex gap-3">
                    <li className='text font-bold text-base hover:text-hover-color hover:transition duration-500 transform hover:scale-105'><a href="#home">Inicio</a></li>
                    <li className='text font-bold text-base hover:text-hover-color hover:transition duration-500 transform hover:scale-105'><a href="#about">Sobre Mim</a></li>
                    <li className='text font-bold text-base hover:text-hover-color hover:transition duration-500 transform hover:scale-105'><a href="#tech">Tecnologias</a></li>
                    <li className='text font-bold text-base hover:text-hover-color hover:transition duration-500 transform hover:scale-105'><a href="#certificate">Certificados</a></li>
                    <li className='text font-bold text-base hover:text-hover-color hover:transition duration-500 transform hover:scale-105'><a href="#portifolio">Portifólio</a></li>
                    <li className='text font-bold text-base hover:text-hover-color hover:transition duration-500 transform hover:scale-105'><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <div className='flex gap-3'>
                <a href="https://github.com/ViniRivaldar" target="_blank" className='hover:transition duration-500 transform hover:scale-105'><FaGithub size={30}/></a>
                <a href="https://www.linkedin.com/in/viniciusrivaldar/" target="_blank" className='hover:transition duration-500 transform hover:scale-105'><FaLinkedin size={30}/></a>
            </div>
        </section>
    )
}