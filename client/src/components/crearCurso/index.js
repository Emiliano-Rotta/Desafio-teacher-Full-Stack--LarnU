import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postPok } from "../../redux/actions";
import style from "./CrearCurso.module.css";

export default function CrearCurso(){
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

        {dispatch(postPok(input))
        alert ("Curso creado con exito")
        setInput({
            nombre: "",
            imagen: "",
            description: "",
        })
        }
        else{
        alert ("Debe compeltar correctamente todos los campos")
         
    }
    }
    // useEffect (()=>{
    //             dispatch(getTipo());
    //         }, [dispatch]);
            

    return(
        <div>
           
            
            <form className ={style.contenedor}  onSubmit = {(e)=>handleSubmit(e)} >
            <h1 className ={style.contenedor}>Crear Curso</h1>
         <div>
                <label> </label><br/>
                <input
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
            autocomplete="off"  
            type="text" 
            value={input.imagen} 
            name='imagen' 
            placeholder="Imagen del curso."  
            onChange={(e)=>handleChange(e)} 
            /> 
            {errors.imagen && (<p className= {style.error} >{errors.imagen}</p>)}<br/>


                <input  
            autocomplete="off"  
            type="textArea" 
            value={input.description} 
            name='description' 
            placeholder="Descripción del curso."  
            onChange={(e)=>handleChange(e)} 
            />
             {errors.description && (<p className= {style.error} >{errors.description}</p>)}<br/>
        </div> 
                
      
        <button className={style.boton1} type='submit'>Crear curso</button>
            
        <Link to= "/"><button className ={style.volver}>Volver</button></Link>
          </form>
        </div>
    )
}