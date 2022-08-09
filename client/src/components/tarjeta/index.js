import React from 'react';
import style from "./assets/Tarjeta.module.css";
import noImage from './assets/no-image.jpg';

export default function Tarjeta ({nombre, imagen}){
   
    return (
        <>
            <div 
           
            className={style.card}>
                <h3 className ={style.nombre}>Curso: {nombre}</h3>
                <img src={imagen} className={style.cardImg} alt='Imagen del curso' 
                    onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${noImage}`;
                }} />
  
            </div >
           
        </>
    )
}