// import React, { Fragment } from "react";
// import { useState, useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux";  //hook
// import {getpok, ordenNombre} from "../../redux/actions";
// import {Link} from "react-router-dom";
// import Tarjeta from "../tarjeta";
// import Paginado from "../paginado";
// import Buscador from "../buscador";
// import style from "./Curso.module.css";
    
import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {getpok, ordenNombre} from "../../redux/actions";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Tarjeta from "../tarjeta";
import Paginado from "../paginado";
import Buscador from "../buscador";
import style from "./Curso.module.css";


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

const ITEMS_PER_PAGE = 6;

export default function Cursos (){
    
    const cursoLarnu = useSelector ((state) => state.cursoLarnu); 
    const dispatch = useDispatch();
    
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








    const [checkout, setCheckout] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);


    
    // useEffect(() => {
    //     return () => {
    //         dispatch(resetTotal());
    //     }

    // }, [])
    const [responsive, setResponsive] = useState({
        xs: false,
        sm: false,
        md: false
    });
    const handleResponsive = () => {
        if (window.innerWidth < 440) return setResponsive({ xs: true, sm: false, md: false })
        else if (window.innerWidth < 600) return setResponsive({ xs: false, sm: true, md: false })
        else if (window.innerWidth < 900) return setResponsive({ xs: false, sm: false, md: true })
    }

    // if (currentPage < 1) setCurrentPage(1);
    return (
        <Box sx={{ width: 1, marginTop: 3  }}>
            <img className ={style.foto} src = "https://media-exp1.licdn.com/dms/image/C4D1BAQH06S9tc3ZRgA/company-background_10000/0/1637873037447?e=2159024400&v=beta&t=1mPH4Ew4bV-_S7lDCpKAfxIqvZigfuEf1T7q9sBU0dw"/>
            <Grid container direction='column'>
                <Grid  container justifyContent='center' spacing={2} >
                    <Grid item xs={12} md={7} lg={7} xl={6}>

                        {/* <Item sx={{ bgcolor: "blue"}}> */}
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
                                            // (responsive.md) ? <div style={{ backgroundColor: '#FFC400', color: "rgb(53, 43, 119)", width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            //      <Link to="/crear" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ color: "white", margin: 1, borderRadius: 1, fontSize: 15 }}>Crear curso</ColorButton></Link>
                                            //     <h2  height='155%'>Cursos Larnu</h2>  
                                            //     <Buscador setActualPag = {setActualPag} />
                                               
                                            // </div>

                                            //     : (responsive.xs)
                                            //         ? <div style={{ backgroundColor: '#FFC400', color: "rgb(53, 43, 119)", width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            //             <Link to="/crear" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ color: "white", margin: 1, borderRadius: 1, fontSize: 15 }}>Crear curso</ColorButton></Link>
                                            //             <h2 height='95%'>Cursos Larnu</h2>  
                                            //             <Buscador setActualPag = {setActualPag} />
                                                        
                                            //         </div>

                                            //         : 
                                                    <div style={{ backgroundColor: '#FFC400', color: "rgb(53, 43, 119)", width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                        <Link to="/crear" style={{ textDecoration: 'none' }}><ColorButton sx={{ color: "white", marginTop: 1, borderRadius: 1, fontSize: 17 }}>Crear curso</ColorButton></Link>
                                                        <h2  height='155%'>CURSOS LARNU</h2>
                                                        <Buscador setActualPag = {setActualPag} />
                                                   
                                                    </div>
                                        }
                                        </Grid>

                                            <div >

                                            <Item className={style.card} >
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

                        {/* </Item> */}
                    </Grid>

                </Grid>
            </Grid >
        </Box >
    )
}




// export default function Cursos (){
//     const dispatch = useDispatch()
//     const cursoLarnu = useSelector ((state) => state.cursoLarnu); 
    

// const [input, setInput] = useState ({
//     nombre: "",
//     imagen: "",
//     description: "",    
// })  


//     const [error, setError] = useState ("")
//     const [orden, setOrden] = useState ("") 
//     const [actualPag, setActualPag] = useState (1)
//     const [cursoPorPag, setCursoPorPag ] = useState(6)

//     const indiceUltimoP = actualPag * cursoPorPag //12
//     const indicePrimerP = indiceUltimoP - cursoPorPag //0
//     const actualCurso = cursoLarnu?.slice(indicePrimerP, indiceUltimoP)// slice me trae una copia en la que eloriginal n se destruye
//     const paginado = (pageNumber) =>{
//         setActualPag (pageNumber)
//     }


//     useEffect(()=>{
//         dispatch (getpok());
//         setActualPag (1);
//     },[dispatch])

    
//     function handleSort(e){
//         e.preventDefault();
//         dispatch (ordenNombre(e.target.value))
//         setActualPag (1);
//         setOrden (`Ordenado ${e.target.value}`)
//     }
    

//     return (
//         <div >
            
//             <div>
            
//             <img className ={style.foto} src = "https://media-exp1.licdn.com/dms/image/C4D1BAQH06S9tc3ZRgA/company-background_10000/0/1637873037447?e=2159024400&v=beta&t=1mPH4Ew4bV-_S7lDCpKAfxIqvZigfuEf1T7q9sBU0dw"/>
//             <h2 className ={style.titulo}> Larnu Cursos </h2>

//             <Buscador setActualPag = {setActualPag} />
//             </div> 
          
//             <div> 
//                 <Paginado
               
//                 cursoPorPag={cursoPorPag}
//                 cursoLarnu ={cursoLarnu.length}
//                 paginado ={paginado}
//                 actualPag ={actualPag}
                
//                 />
             
//              </div> 
                            
        
//          <div className = {style.container}>  
//            {actualCurso.length>0? actualCurso.map ((p) =>{ 
//             return(
//                 <Fragment >                    
//                      <Link  to = {"/idCurso/" + p.id}> 
//                         <Tarjeta 
//                         nombre ={p.nombre.charAt(0).toUpperCase() + p.nombre.slice(1) }  
//                         imagen ={p.imagen}    
//                         description ={p.description}   
//                         key={p.id}/>
//                     </Link>  
//                 </Fragment>
//             ) 
//         }) : <img className ={style.gif} src = "https://static.wixstatic.com/media/4023e9_de0d1a0ad7324cecbd3b3849ae8a75d6~mv2.gif"></img> 

//         } 
        
//         <div > 
           
//             <select className ={style.boton}  onChange={e =>handleSort(e)}>   
//                 <option value="asc">Ordenar A-Z </option>
//                 <option value="des">Ordenar Z-A </option>
//             </select>
            

//             <Link to = "/crear"><button className ={style.boton}>Crea Curso </button></Link>

            
//             </div>
         
//         </div>   
    
   
//         </div> 
    
//     ) //CIERRA EL RETURN
// }


