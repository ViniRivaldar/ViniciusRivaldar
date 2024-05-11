'use client'
import {register} from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
register()


export default function Certificate(){

    const imagem = [
        {id:'1',img:"https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-2.png?alt=media&token=0e395750-26d6-4824-869f-b41e46c2d194" },
        {id:'2', img:"https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-3.png?alt=media&token=b6f72d89-e2f1-4057-8d5e-b89536b90f95"},
        {id:'3', img:"https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-5.png?alt=media&token=c1ed6978-2940-4cc7-a69d-36a482594e0b"},
        {id:'4',img:"https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-32.png?alt=media&token=5c035794-b892-49ba-aeb7-2d12921a4ffc"}
    ]

    return(
        <section id="certificate"className="flex flex-col items-center mt-20 ">
            <h2 className="text-5xl font-bold mb-1.5 text-azul mt-20">Certificados</h2>
            <div className="flex flex-col gap-10 mt-10">
                <Swiper
                slidesPerView={1}
                pagination={{clickable:true}}
                navigation
                style={{ width: '700px' }}
                >
                    {
                        imagem.map((item)=>(
                            <SwiperSlide key={item.id}>
                                <Image
                                src={item.img}
                                alt='slide'
                                width={700}
                                height={350}
                                
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
           </div>
        </section>
    )
}