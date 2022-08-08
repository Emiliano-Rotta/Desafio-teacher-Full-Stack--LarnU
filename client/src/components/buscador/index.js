import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { getNombre } from "../../redux/actions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [nombre, setNombre] = useState ("")

    function handleInputChange (e){
    e.preventDefault()
    setNombre(e.target.value)
    console.log (nombre)
    
    }

    function handleSubmit (e){
    e.preventDefault()
    dispatch(getNombre (nombre))
    console.log (nombre)
    }

    return (
        <div>
            <input
            
            type = "text" 
            placeholder = "Buscar..."
            onChange = {(e) => handleInputChange (e)}
            
            />
            <button type ="submit"  onClick={(e)=> handleSubmit(e) } > Buscar</button>
        </div>
    )
}