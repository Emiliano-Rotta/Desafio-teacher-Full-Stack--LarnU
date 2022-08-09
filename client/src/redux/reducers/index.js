const initialState ={
    cursoLarnu: [],
}

    function rootReducer (state = initialState, action){
        switch (action.type){


            case "GET_CURSOS":
                return {
                    ...state,
                    cursoLarnu: action.payload,
                }

            //detalle
            case "GET_DETALLE":
                return {
                    ...state,
                    cursoLarnu: action.payload
                }

            case "DELETE":
                return {
                    ...state,
                    cursoLarnu: [],
                } 
            // Buscador
            case "GET_NOMBRE":
                return {
                    ...state,
                    cursoLarnu: action.payload,
                }


            case "GET_CURSOS_ID":
                return {
                    ...state,
                    cursoLarnu: action.payload
                }

            // Orden ascendente o descendente
            case "ORDEN_NOMBRE": 
            let sortedArr = action.payload === "asc" ?
                state.cursoLarnu.sort(function(a,b){
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (b.nombre > a.nombre) {
                        return - 1;
                    }
                    return 0;
                }) : 
                state.cursoLarnu.sort(function(a,b){
                    if (a.nombre > b.nombre) {
                        return -1;
                    }
                    if (b.nombre > a.nombre) {
                        return  1;
                    }
                    return 0;
            
                })
                return {
                ...state,
                cursoLarnu: sortedArr

                }

            default:
                return state;
            }
        }   

        
        export default rootReducer; 