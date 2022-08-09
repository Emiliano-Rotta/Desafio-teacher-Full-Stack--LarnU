import React, { useState, useEffect } from 'react';
import style from "./Tarjeta.module.css";
import noImage from './assets/no-image.jpg';


export default function Tarjeta ({nombre, imagen, description}){
   
    

    const [modal, setModal] = useState({
        open: false,
        type: '',
        text: ''
    });


    return (
        <>
            <div 
           
            className={style.card}>
                <h3 className ={style.nombre}>Curso: {nombre}</h3>
                <img src={imagen} className={style.cardImg} alt='Imagen del curso' onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${noImage}`;
                }} />
  
            </div >
           
        </>
    )
}
















// export default function Tarjeta ({nombre, imagen, description}){
//     return (
//         <div className = {style.CardContainer}>

//             <h3 className ={style.name}>Curso: {nombre}</h3>
//             <img src = {imagen} alt = {nombre} className ={style.image} />
//             <h3 className ={style.tipo}>Descripción: {description}</h3> 
     
//         </div>
//     );
// }


