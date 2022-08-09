import axios from "axios";

export function getCurso (){
    return async function (dispatch){ //enviar acciones al reducer, la crea el midle (solo para asincronas)
        try {
        var json = await axios.get ("http://localhost:3001/cursos"); 
        return dispatch({      
        type: "GET_CURSOS", 
        payload: json.data

        })
    } catch (error) {
        console.log(error)
    
    }  
  }
  
}

//detalle
export function getDetalle (id){
    return async function (dispatch) {
        try{
            var json = await axios.get ("http://localhost:3001/idCurso/" + id);
            return dispatch ({
                type: "GET_DETALLE",
                payload: json.data
            })
        }catch(error)  {
            console.log (error)
    } 
    }
}

export function deleteDetalle (){
    return{
        type: "DELETE",
}
}

// Buscador
export function getNombre(nombre){
    return async function (dispatch){
        try{
            var json = await axios.get ("http://localhost:3001/curso?nombre=" + nombre);
            return dispatch({
                type: "GET_NOMBRE",
                payload: json.data

            })
        }catch (error){
        console.log (error)
    }
}
}

//Crear cursos
export function postCurso (payload){
    return async function (dispatch){
        var response = await axios.post ("http://localhost:3001/curso",payload);
        console.log (response)
        return response;
    }}





export const getOneProduct = (id) => {
    return async function (dispatch) {
        const response = (await axios.get(`/idCurso/${id}`)).data;
        return dispatch({ type: "GET_CURSOS_ID", payload: response })
    }
}

export const editarCurso = (id, payload) => {
    return async function (dispatch) {
        var response = (await axios.put(`http://localhost:3001/editar/${id}`,payload)).data;
        // console.log("acciones", response)
        return dispatch({ type: "UPDATE_PRODUCT", payload: response })
    }
}

//boton de orden asc y desc creados
export function ordenNombre(payload){
    return{
        type: "ORDEN_NOMBRE",
        payload
    }
}