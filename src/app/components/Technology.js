import Image from "next/image";



export default function Technology(){

    return(
        <section id="tech"className="flex flex-col items-center mt-20">
            <h2 className="text-5xl font-bold mb-1.5 text-azul mt-20">Principais Tecnologias</h2>
            <div className="flex gap-10 mt-11">
                <Image src="/next.svg" alt="logo next" width={200} height={200}/>
                <Image src="/tailwind.png" alt="logo tailwind" width={200} height={200}/>
                <Image src="/node.png" alt="logo node" width={200} height={200}/>
                <Image src="/mongodb.png" alt="logo mongodb" width={200} height={200}/>
                <Image src="/docker.png" alt="logo docker" width={200} height={200}/>
            </div>
        </section>
        
    )
}