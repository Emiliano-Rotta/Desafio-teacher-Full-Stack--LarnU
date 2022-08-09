import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Cursos from "./components/cursos";
import CrearCurso from "./components/crearCurso";
import EditarCurso from "./components/editarCurso";
import Detalle from "./components/detalle";

const theme = createTheme({
  palette: {
    primary: { main: '#FFC400', },
    secondary: {main: '#3a0ca3',},
  },});
   
    
function App() {
  return (
    
    <BrowserRouter> 
    <div className="App">
    <ThemeProvider theme={theme} >
    <Switch>
    
        <Route exact path = "/" component = {Cursos}/>
        <Route path= "/idCurso/:id" component = {Detalle}/>
        <Route path = "/crear" component = {CrearCurso}/>
        <Route path = "/editar/:id" component = {EditarCurso}/>
       
    </Switch>
    </ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;