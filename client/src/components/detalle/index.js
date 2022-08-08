import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getDetalle, deleteDetalle } from "../../redux/actions";
import { useEffect} from "react";
import style from "./Detail.module.css";

    
export default function Detail(props){
    // console.log (props)
    const dispatch = useDispatch ()

    useEffect(() => {
        dispatch (getDetalle(props.match.params.id));
        return function (){dispatch (deleteDetalle())}
    }, [dispatch])

    

const cursoLarnu = useSelector ((state)=> state.cursoLarnu)

return (
    <div >
        {
            cursoLarnu.length>0?
            <div>
            <div className = {style.DetailContainer} >
                {/* nombre */}
                <h2 className ={style.name}>Curso: {cursoLarnu[0].nombre.charAt(0).toUpperCase() + cursoLarnu[0].nombre.slice(1)}.</h2>
                
                {/* imagen */}
                <img src = {cursoLarnu[0].imagen} alt = "" className ={style.image}/>
                
                {/* Descripción */}
                <h5 className ={style.Estadisticas2}>
                    Descripción del curso: {cursoLarnu[0].description}; 
                </h5>


                <Link to = "/" >
                 <button className ={style.volver} >Volver</button>
                </Link>   

                <Link to = "/editar/" >
                 <button className ={style.volver} >Editar curso</button>
                </Link>   
            </div>    

             </div> : <img className ={style.gif} src = "https://static.wixstatic.com/media/4023e9_47a843beb6cc465e8301cff1fd9ffd90~mv2.gif" alt = "Cargando..."></img> 
        }
        
    </div>
)
}