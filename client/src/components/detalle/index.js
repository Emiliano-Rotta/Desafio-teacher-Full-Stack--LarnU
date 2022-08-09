import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getDetalle, deleteDetalle } from "../../redux/actions";
import { useEffect} from "react";
import style from "./assets/Detail.module.css";
import noImage from './assets/no-image.jpg';

    
export default function Detail(props){

const dispatch = useDispatch ()
const cursoLarnu = useSelector ((state)=> state.cursoLarnu)

useEffect(() => {
    dispatch (getDetalle(props.match.params.id));
    return function (){dispatch (deleteDetalle())}
}, [dispatch])

    
return (
    <div >
        {
        cursoLarnu.length>0?
        
        <div className = {style.DetailContainer} >
            {/* nombre */}
            <h2 className ={style.nombre}> {cursoLarnu[0].nombre.charAt(0).toUpperCase() + cursoLarnu[0].nombre.slice(1)}</h2>
            
            {/* imagen */}
            <img src = {cursoLarnu[0].imagen} className ={style.image} alt='Imagen del curso' 
                onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = `${noImage}`;
            }} />
            
            {/* Descripción */}
            <h5 className ={style.descripcion}>
                Descripción: {cursoLarnu[0].description} 
            </h5>


            <Link to = "/" >
                <button className ={style.boton} >Volver</button>
            </Link>   

            <Link to = "/editar/" >
                <button className ={style.boton} >Editar curso</button>
            </Link>   

        </div> : <img className ={style.gif} src = "https://static.wixstatic.com/media/4023e9_47a843beb6cc465e8301cff1fd9ffd90~mv2.gif" alt = "Cargando..."></img> 
        }
        
    </div>
)
}