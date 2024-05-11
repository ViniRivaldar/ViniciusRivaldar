import React from "react";
import {A} from './style'

function Link ({texto, link}){

    return <><A href={link}>{texto}</A> </>
}

export default Link