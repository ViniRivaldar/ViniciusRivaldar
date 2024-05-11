
import { useState, useEffect } from "react";
import {register} from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
register()

export default function ComponenteExemplo() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://api-portifolio-8efr.onrender.com")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDados(dados.projetos)
    })
      .catch((erro) => console.error(erro));
  }, []);

  return (
    <div>
        <Swiper
        slidesPerView={1}
        navigation
        style={{ width: '700px' }}>
            {dados ? (
                dados.map((item) => (
                    <SwiperSlide className="w-1/2 h-1/2 flex flex-col items-center justify-center rounded-[5px] bg-white" key={item._id}>
                    <video src={item.video}
                    className="w-[450px] h-[160px] p-[20px]" controls controlsList="nodownload"></video>
                    <h4 className="text-center text-azul font-bold text-[24px]">{item.titulo}</h4>
                    <p className="text-center mb-4">{item.descricao}</p>
                    
                    <a href={item.urlDoRepositorio} className="hover:text-azul" target="_blank">Repositório</a>
                    <a href={item.urlDoSite} className="hover:text-azul" target="_blank">Site</a>
                    
                </SwiperSlide>
                ))
            ) : (
                <p>Carregando...</p>
            )}
        </Swiper>
      
    </div>
  );
}