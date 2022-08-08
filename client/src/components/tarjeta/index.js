import React from "react";
import style from "./Tarjeta.module.css";


export default function Tarjeta ({nombre, imagen, description}){
    return (
        <div className = {style.CardContainer}>

            <h3 className ={style.name}>Curso: {nombre}</h3>
            <img src = {imagen} alt = {nombre} className ={style.image} />
            <h3 className ={style.tipo}>Descripción: {description}</h3> 
     
        </div>
    );
}


