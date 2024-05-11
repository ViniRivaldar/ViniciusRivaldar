import styled from "styled-components";



export const ContainerItens = styled.div`
    padding: 30px 60px;
    background: #F0F0F0;
    @media screen and (max-width: 1165px) {
        overflow-x: hidden;
    }
    
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    @media screen and (max-width: 1165px) {
        display: none ;
    }
   

`

export const Menu = styled.li`

    display: inline-block;
    margin-right: 30px;
    text-decoration: none;
    background: #F0F0F0;
`

export const ContainerLinks = styled.div`
    display: flex;
    gap: 15px;
    margin-right: 30px;
   

`

export const Imagens = styled.img`

    width: 30px;
   
`

export const Home = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px ;  
    img{
        position: relative;
        animation: flutuar 2s ease-in-out infinite alternate;
       

    }  

    @keyframes flutuar{
        0%{
            top: 0;
        }
        100%{
            top:30px;
        }
    }
    .efeito-text{
        visibility: hidden;
    }
    .efeito-img{
        visibility: hidden;
    }
    @media screen and (max-width: 1165px) {
        display: flex;
        flex-direction: column-reverse;
        img{
            width: 300px;
        }
       .efeito-text{
            margin-top: 50px;
       }
       .efeito-img{
        margin-top: 0;
       }
        h3{
            text-align: justify;
            
        }
        h1{
            text-align: justify;
            font-size: 50px;
        }
        p{
            text-align: justify;
            width: 250px;
        }
        button{
            display: block;
            margin: 0 auto;
        }
    }

`


export const Div = styled.div``

export const H3 = styled.h3`

    color: #024AAC;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 10px;
   
`

export const H1 = styled.h1`

    color: #024AAC;
    font-size: 80px;
    font-weight: bold;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 5px;
`

export const Paragrafo = styled.p`
    width: 410px;
    margin-bottom: 30px;
    
`

export const Button = styled.button`
    width: 220px;
    height: 60px;
    background: #3DB3FA;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.90);
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover{
        opacity: 0.8;
        transform: scale(1.2);
    }

    &:active{
        opacity: 0.5;
    }


`
export const About = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
    margin-top: 60px;

    
    .efeito-text-about{
        visibility: hidden;
    }
    .efeito-img-about{
        visibility: hidden;
    }
    @media screen and (max-width: 1165px){
        gap: 20px;
        img{
            width: 300px;
        }
       .efeito-text{
            margin-top: 50px;
       }
       
        h3{
            text-align: justify;
            
        }
        h1{
            text-align: center;
            font-size: 40px;
        }
        p{
            text-align: justify;
            width: 250px;
        }
    }
`

export const H2 = styled.h2`

    color: #024AAC;
    font-size: 50px;
    @media screen and (max-width: 1165px){
        font-size: 35px;
    }
`

export const Tech = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 60px;
   .titulo{
    visibility: hidden;
   }
   .efeito-img-about{
        visibility: hidden;
    }
    @media screen and (max-width: 1165px){
        h2{
            text-align: center;
            font-size: 35px;
        }
        img{
            width: 40px;
        }
    }
`

export const Certificate = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
   
    div{
        margin-top: 10px;
    }
   .slide-item{
        

   }
    .titulo{
    visibility: hidden;
   }
   @media screen and (max-width: 1165px){
        .meu-botao-next,
        .meu-botao-prev {
            display: none;
        }
        h2{
            font-size: 35px;
        }
        img{
            display: block;
            margin: 0 auto;
            width: 330px;
        }

   }
`

export const Portfolio = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
    margin-bottom: 60px;
   
    .titulo {
        text-align: center; 
        margin-bottom:60px;
    }
    
    h2 {
        color: #024AAC;
        font-size: 50px;
    }

    .projetos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 
        gap: 40px;
        padding: 30px;
        border-radius: 15px;
        background: #E0E0E0;
        width: 1000px;
    }

    .projetos-card{
        padding: 10px;
        background: #ffff;
        border-radius: 5px;
        width: 50%;
        
    }
    video{
        width: 100%;
    }
    h4{
        text-align: center;
        color: #024AAC;
        font-size: 20px;
    }
    p{
        margin-left: 10px;
    }
    a{
        text-decoration: none;
        margin-left: 10px;
        
    }
    @media screen and (max-width: 1165px){

        h2{
            font-size: 35px;
        }
        .projetos {
            width: 360px;
        }
        .projetos-card{
            width: 100%;
        }
    }
   
`

export const Contact = styled.footer`
    display: flex;
    flex-direction: column;
    background: #024AAC;
    padding-top: 60px;
    padding-bottom: 60px;

    div{

        margin-left: 60px;
    }

    h2{
        color: #F0F0F0;
        font-size: 50px;
    }

    p{
        display: inline-block;
        color: #F0F0F0;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 25px;
        margin-top: 18px;
        margin-right: 10px;
    }

    @media screen and (max-width: 1165px){

        div{

            margin-left: 30px;
        }

        p{
            font-size: 13px;
        }

    }
`


