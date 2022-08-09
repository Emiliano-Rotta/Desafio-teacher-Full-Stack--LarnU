import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {getCurso, ordenNombre} from "../../redux/actions";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Tarjeta from "../tarjeta";
import Paginado from "../paginado";
import Buscador from "../buscador";
import style from "./assets/Curso.module.css";
import navBar from './assets/navBar.jpg';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    borderRadius: 0,
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#ffa800',
    },
}));


export default function Cursos (){
    
    const cursoLarnu = useSelector ((state) => state.cursoLarnu); 
    const dispatch = useDispatch();
    
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
        dispatch (getCurso());
        setActualPag (1);
    },[dispatch])

    function handleSort(e){
        e.preventDefault();
        dispatch (ordenNombre(e.target.value))
        setActualPag (1);
        setOrden (`Ordenado ${e.target.value}`)
    }

    return (
        <Box sx={{ width: 1, marginTop: 3  }}>
            <img className={style.foto} src={navBar} alt='navBar' />
            <Grid container direction='column'>
            <Grid  container justifyContent='center' spacing={2} >
            <Grid item xs={12} md={7} lg={7} xl={6}>

            {
            (cursoLarnu.length === 0)
                ? <Item sx={{ bgcolor: "#fff",  marginTop: "5%", display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                    <h1>LarnU Cursos </h1>
                    <h3> No hay ningún curso disponible, pero puede crear uno si desea... </h3>
                </Item>
                : (

            <>
            <Grid container justifyContent='center' item xs={12} width='100%' height={50} mt={2} mb={2}>
            {

                <div style={{ backgroundColor: '#FFC400', color: "rgb(53, 43, 119)", width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Link to="/crear" style={{ textDecoration: 'none' }}><ColorButton sx={{ color: "white", marginTop: 1, borderRadius: 1, fontSize: 17 }}>Crear curso</ColorButton></Link>
                    <h2  height='155%'>CURSOS LARNU</h2>
                    <Buscador setActualPag = {setActualPag} />
                    
                    
                </div>
            }
            </Grid>

                <div >

                    <Item className={style.card} >
                    
                    {/* <select className ={style.boton}  onChange={e =>handleSort(e)}>   
                        <option value="asc">Ordenar A-Z </option>
                        <option value="des">Ordenar Z-A </option>
                    </select> */}
                    <Grid container spacing={0.5}>
                        {actualCurso.map(p => {
                            return(
                                <Fragment >                    
                                <Link  to = {"/idCurso/" + p.id}> 
                                    <Tarjeta 
                                    nombre ={p.nombre.charAt(0).toUpperCase() + p.nombre.slice(1) }  
                                    imagen ={p.imagen}
                                    key={p.id}/>
                                </Link>  
                                </Fragment>
                                ) 
                            })}

                    </Grid>
                    </Item>
                    <div> 
                        <Paginado
                        cursoPorPag={cursoPorPag}
                        cursoLarnu ={cursoLarnu.length}
                        paginado ={paginado}
                        actualPag ={actualPag}
                        
                        />
                    
                    </div> 
                                        

                </div>
            </>)
                }

                {
                    (cursoLarnu.length === 0) ? 
                    <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> 
                        <Link to="/crear" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 15 }}>Crear curso</ColorButton></Link>
                    </Item>  : ""
                    
                }

            </Grid>

            </Grid>
            </Grid >
        </Box >
    )
}