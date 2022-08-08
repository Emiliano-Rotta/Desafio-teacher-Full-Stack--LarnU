import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Cursos from "./components/cursos";
import CrearCurso from "./components/crearCurso";
import EditarCurso from "./components/editarCurso";
import Detalle from "./components/detalle";


function App() {
  return (
    <BrowserRouter> 
    <div className="App">
   
    <Switch>
    
        <Route exact path = "/" component = {Cursos}/>
        <Route path= "/idCurso/:id" component = {Detalle}/>
        <Route path = "/crear" component = {CrearCurso}/>
        <Route path = "/editar" component = {EditarCurso}/>
       
    </Switch>
    
    </div>
    </BrowserRouter>
  );
}

export default App;