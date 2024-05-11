'use client'
import { MdEmail } from 'react-icons/md'; 
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';



export default function Footer(){


    return(
        <section id="contato" className='ml-10 mb-10'>
            <h2 id="contato-titulo"className="text-5xl font-bold mb-1.5 text-branco mt-20">Contatos</h2>
            <div id="contato-conteudo"className='mt-5 flex flex-col justify-center gap-2'>
                <div className="flex items-center gap-1 text-branco">
                    <MdEmail/><p>Vinicius-rivaldar@outlook.com</p>
                </div>
                <div className="flex items-center gap-1 text-branco">
                    <FaWhatsapp/><p>73 9.8124-6136</p>
                </div>
                <div className="flex items-center gap-1 text-branco">
                    <FaLinkedin/><a href="https://www.linkedin.com/in/viniciusrivaldar/" target="_blank"><p>Vinicius Rivaldar</p></a>
                </div>
                <div className="flex items-center gap-1 text-branco">
                    <FaGithub/><a href='https://github.com/ViniRivaldar' target="_blank"><p>ViniRivaldar</p></a>
                </div>
            </div>
        </section>
    )
}