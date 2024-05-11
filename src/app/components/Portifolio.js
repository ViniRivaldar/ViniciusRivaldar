'use client'
import GetProjects from './GetProjects'

export default function Portifolio(){

  

  return(
    <section id="portifolio"className="flex flex-col items-center mt-10 mb-20">
      <h2 id="titulo-portifolio"className="text-5xl font-bold mb-1.5 text-azul mt-20 ">Portifólio</h2>
      <div id="card-portifolio"className="w-[750px] h-[550px] flex flex-col items-center justify-center mt-8 bg-card-bg rounded-[15px] p-[30px]">
        <GetProjects/>
      </div>
    </section>
  )
}