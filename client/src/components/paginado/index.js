import React from "react"
import style from "./assets/Paginado.module.css";

export default function Paginado ({cursoPorPag, cursoLarnu, paginado, actualPag}){
const numeroPagina = []

for (let i = 0; i < Math.ceil(cursoLarnu/cursoPorPag); i++) {
    numeroPagina.push (i+1)
}
    return(
        <nav>
            
        <ul className= {style.paginadoContenedor}>
        <button disabled = {actualPag===1? true:false}  className = {style.botonPaginado} onClick={() => paginado(actualPag-1)}> {"<"} </button>
            {
                numeroPagina &&
                numeroPagina.map (number =>(
                    <div  key={number}>
                    <button onClick={() => paginado(number)} 
                    className = {style.botonPaginado}>{number}
                    </button>
                    </div>
                ))
            }
            <button disabled = {actualPag === numeroPagina.length? true:false} className = {style.botonPaginado} onClick={() => paginado(actualPag+1)}> {">"} </button>
        </ul>
            
        </nav>
    )
}