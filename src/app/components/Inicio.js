"use client"
import Image from "next/image";
import "../globals.css";


export default function Inicio(){
    return(
        
        <section id="home"className="flex justify-around items-center mt-[60px]">
            <div className="mb-8">
                <h3 className="text-base leading-none mb-2.5 text-azul font-bold text-justify">Olá</h3>
                <h1 className="text-6xl font-bold leading-none mt-0 mb-1.5 text-azul text-justify">Eu sou <br/>Vinicius</h1>
                <h3 className="text-base leading-none mb-2.5 text-azul font-bold text-justify">-Desenvolvedor FullStack</h3>
                <p className="text-justify w-[300px]">
                    Um desenvolvedor fullstack é 
                    caracterizado por sua presença 
                    digital única, que engloba seu 
                    site pessoal, linguagens de 
                    programação e estilo de codificação. 
                    Essa identidade reflete sua capacidade
                    de lidar com todos os aspectos do 
                    desenvolvimento de software, do front-end
                    ao back-end.
                </p>
                <a href="#contato">
                    <button className="w-[170px] h-[55px] bg-[#3DB3FA] rounded-[16px] 
                    shadow-custom text-xl text-bold mt-6 
                    hover:transition-transform hover:scale-[1.05] duration-300 ease-in-out hover:opacity-80 
                    active:opacity-50"
                    >Contato</button>
                </a>
            </div>
            <div className="mt-[60px]">
                <Image className="animate-flu"src="/logo.png" alt="perfil" width={500} height={500}/>
            </div>
            
        </section>
        
    )
} 