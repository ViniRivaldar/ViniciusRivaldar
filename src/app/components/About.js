import Image from "next/image";

export default function About(){

    return(
        <section id="about"className="flex justify-around  items-center mt-24">
            <Image src="/logo.png" alt="logo.png" width={500} height={500}/>
            <div className="mr-36">
                <h2 className="text-5xl font-bold mb-1.5 text-azul">Sobre Mim</h2>
                <h3 className="text-base leading-none mb-2.5 text-azul font-bold text-justify">Vinicius Rivaldar</h3>
                <p className="text-justify w-[300px]">
                    Aos 26 anos, deixei minha profissão como
                    ajudante de pedreiro para adentrar ao mundo da
                    programação, impulsionado pela curiosidade e o
                    desejo de transição profissional. Após iniciar com Python, 
                    migrei para o desenvimento web devido à escassez de oportunidades. 
                    Dominando HTML, CSS e back-end, criei minha primeira API para um
                    banco de dados de futebol, demonstrando minha prontidão para ingressar 
                    como desenvolvedor fullstack e contribuir efetivamente nas empresas
                    que me acolherem.
                </p>
            </div>
        </section>
    )
}