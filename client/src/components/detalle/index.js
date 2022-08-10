import React from "react";
import {Link, useLocation, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getDetalle, deleteDetalle, deleteCurso } from "../../redux/actions";
import { useEffect} from "react";
import style from "./assets/Detail.module.css";
import noImage from './assets/no-image.jpg';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
    
export default function Detail(props){

//para obtener el ID y poder modificar el curso
const location = useLocation()
let id = (location.pathname.substring(9,location.pathname.length))
const history = useHistory ()
const dispatch = useDispatch ()
const cursoLarnu = useSelector ((state)=> state.cursoLarnu)

useEffect(() => {
    dispatch (getDetalle(props.match.params.id));
    return function (){dispatch (deleteDetalle())}
}, [dispatch])

function handleDelete(e){
    e.preventDefault()

  swal({
    title: "¿Seguro desea borrar el curso?",
    text: "Una vez eliminado, no podra recuperar el curso.",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("El curso ha sido eliminado", {
        icon: "success",
      });
      dispatch(deleteCurso(id))
      history.push('/') 
    } else {
      swal("El curso no ha sido borrado, si quieres puedes modificarlo");
    }
  });

}
    
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
            <Button startIcon={<KeyboardReturnIcon sx={{ color:'#FFC400 ' }}/>}>Volver </Button> 
            </Link>

            <Link  to = {"/editar/" + id}>
            <Button startIcon={<EditIcon sx={{ color:'#FFC400 ' }}/>}>Editar curso </Button>
            </Link>
           
            <form onSubmit = {(e)=>handleDelete(e)} >
            <Button type='submit' startIcon={<DeleteIcon sx={{ color:'#FFC400 ' }}/>}>Borrar curso
            </Button></form>

            
        </div> : <img className ={style.gif} src = "https://static.wixstatic.com/media/4023e9_47a843beb6cc465e8301cff1fd9ffd90~mv2.gif" alt = "Cargando..."></img> 
        }
        
    </div>
)
}