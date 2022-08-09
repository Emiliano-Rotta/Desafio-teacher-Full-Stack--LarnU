import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { getNombre } from "../../redux/actions";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


//Material UI
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    height: 40,
    width: '70%',
    [theme.breakpoints.up('xs')]: {
        width: '100%',
        textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
        width: '80%',
        textAlign: 'center'
    },
}));

//Material UI
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            marginLeft: 30
        },
    },
}));


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
        <Search>
        <form onSubmit={(e) => handleSubmit(e)}>
            <StyledInputBase
                value={nombre}
                onChange={(e) => handleInputChange(e)}
                placeholder="Buscar curso..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </form>
        </Search>

     </div>

    )
}