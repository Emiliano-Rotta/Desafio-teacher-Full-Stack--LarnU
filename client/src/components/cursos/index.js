import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";  //hook
import {getpok, ordenNombre} from "../../redux/actions";
import {Link} from "react-router-dom";
import Tarjeta from "../tarjeta";
import Paginado from "../paginado";
import Buscador from "../buscador";
import style from "./Curso.module.css";
    

export default function Cursos (){
    const dispatch = useDispatch()
    const cursoLarnu = useSelector ((state) => state.cursoLarnu); 
    

const [input, setInput] = useState ({
    nombre: "",
    imagen: "",
    description: "",    
})  


    const [error, setError] = useState ("")
    const [orden, setOrden] = useState ("") 
    const [actualPag, setActualPag] = useState (1)
    const [cursoPorPag, setCursoPorPag ] = useState(6)

    const indiceUltimoP = actualPag * cursoPorPag //12
    const indicePrimerP = indiceUltimoP - cursoPorPag //0
    const actualCurso = cursoLarnu?.slice(indicePrimerP, indiceUltimoP)// slice me trae una copia en la que eloriginal n se destruye
    const paginado = (pageNumber) =>{
        setActualPag (pageNumber)
    }


    useEffect(()=>{
        dispatch (getpok());
        setActualPag (1);
    },[dispatch])

    
    function handleSort(e){
        e.preventDefault();
        dispatch (ordenNombre(e.target.value))
        setActualPag (1);
        setOrden (`Ordenado ${e.target.value}`)
    }
    

    return (
        <div >
            
            <div>
            
            <img className ={style.foto} src = "https://media-exp1.licdn.com/dms/image/C4D1BAQH06S9tc3ZRgA/company-background_10000/0/1637873037447?e=2159024400&v=beta&t=1mPH4Ew4bV-_S7lDCpKAfxIqvZigfuEf1T7q9sBU0dw"/>
            <h2 className ={style.titulo}> Larnu Cursos </h2>

            <Buscador setActualPag = {setActualPag} />
            </div> 
          
            <div> 
                <Paginado
               
                cursoPorPag={cursoPorPag}
                cursoLarnu ={cursoLarnu.length}
                paginado ={paginado}
                actualPag ={actualPag}
                
                />
             
             </div> 
                            
        
         <div className = {style.container}>  
           {actualCurso.length>0? actualCurso.map ((p) =>{ 
            return(
                <Fragment >                    
                     <Link  to = {"/idCurso/" + p.id}> 
                        <Tarjeta 
                        nombre ={p.nombre.charAt(0).toUpperCase() + p.nombre.slice(1) }  
                        imagen ={p.imagen}    
                        description ={p.description}   
                        key={p.id}/>
                    </Link>  
                </Fragment>
            ) 
        }) : <img className ={style.gif} src = "https://static.wixstatic.com/media/4023e9_de0d1a0ad7324cecbd3b3849ae8a75d6~mv2.gif"></img> 

        } 
        
        <div > 
           
            <select className ={style.boton}  onChange={e =>handleSort(e)}>   
                <option value="asc">Ordenar A-Z </option>
                <option value="des">Ordenar Z-A </option>
            </select>
            

            <Link to = "/crear"><button className ={style.boton}>Crea Curso </button></Link>

            
            </div>
         
        </div>   
    
   
        </div> 
    
    ) //CIERRA EL RETURN
}


