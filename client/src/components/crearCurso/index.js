import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postCurso } from "../../redux/actions";
import style from "./assets/CrearCurso.module.css";

import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function CrearCurso(){

const [imageChosen, setImageChosen] = useState(false);
const [imagen, setImagen] = useState("");

const history = useHistory()
const dispatch = useDispatch()

const [errors, setErrors] = useState({})
const[input, setInput] = useState({  nombre: "", imagen: "", description: "", })

function validate(input){
    let errors = {};

    if(!input.nombre || !/^[a-z]+[A-Za-z0-9\s]+$/g.test(input.nombre)){
        errors.nombre = 'Al menos dos caracteres el primero, letra minúscula.';
    }
    if(!input.imagen ){
        errors.imagen = 'Colocar una imagen, puede ser URL.';
    }
    if(!input.description ){
        errors.description = 'Colocar una descripción.';
    }
    return errors

}


function handleChange(e){
    e.preventDefault ();
    setInput({
    ...input,
    [e.target.name] : e.target.value,
    });
    setErrors(validate({
    ...input,
    [e.target.name]: e.target.value

    }));console.log (input)
}

   
    
function handleSubmit(e){
    e.preventDefault()
    if( input.nombre !== "" 
    && !errors.hasOwnProperty("nombre") //devuelve un buleano si el objeto tiene la propiedad especificada 
    && !errors.hasOwnProperty("imagen")
    && !errors.hasOwnProperty("description") 
    )

    {dispatch(postCurso(input))
    alert ("Curso creado con exito")
    setInput({
        nombre: "",
        imagen: "",
        description: "",
    })
    history.push('/')
    
    }
    else{
    alert ("Debe compeltar correctamente todos los campos")
        
}
}

//Para cargar la foto desde la computadora
async function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset','ecommerce');
    setImageChosen(true);
    const res = await fetch('https://api.cloudinary.com/v1_1/hentech/image/upload', {
        method: 'POST',
        body: data
    });
    const file = await res.json();

    setImagen(file.secure_url);
    setInput({...input, imagen: file.secure_url});
  }

            

    return(
        <div>
           <form className ={style.contenedor}  onSubmit = {(e)=>handleSubmit(e)} >
            <h1 className ={style.nombre}>Crear curso</h1>
            <div>
                <label> </label><br/>
                <input
                className ={style.input}
                placeholder="Nombre del curso: "
                autocomplete="off"
                type = "text"
                value = {input.nombre}
                name = "nombre"
                onChange ={(e)=>handleChange(e)} 
                /> 
                {errors.nombre && (
                    <p className ={style.error}><p className = "error">{errors.nombre}</p></p>
                )}
            </div>

            <div><br/>
                            
                <input  
                className ={style.input}
                autocomplete="off"  
                type="text" 
                value={input.imagen} 
                name='imagen' 
                placeholder="Imagen del curso."  
                onChange={(e)=>handleChange(e)} 
                /> 
                
           
                <input className={style.seleccionarArchivo} type="file" name="file" onChange={uploadImage} ></input> <br/> 
                {
                    imageChosen && (<img  className={style.seleccionarArchivo}src={imagen} style={{width:'40%'}} alt="imagen"/>) 
                }
                    
                    {errors.imagen && (<p className= {style.error} >{errors.imagen}</p>)}<br/>
            </div>
            <div> <br/>

                <textarea  
                className ={style.textarea}
                autocomplete="off"  
                type="text" 
                value={input.description} 
                name='description' 
                placeholder="Descripción del curso."  
                onChange={(e)=>handleChange(e)} 
                />
                {errors.description && (<p className= {style.error} >{errors.description}</p>)}<br/>
            </div> 
                
            <br/>
            <Link to = "/" >
            <Button startIcon={<KeyboardReturnIcon sx={{ color:'#FFC400 ' }}/>}>Volver </Button> 
            </Link>

            
            <Button type='submit' startIcon={<AddBoxIcon sx={{ color:'#FFC400 ' }}/>}>Crear curso </Button>

            
            </form>
            </div>
    )
}