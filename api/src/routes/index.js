const { Router } = require('express');
const {Cursos} = require ("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//llamado a la base de datos para trerme los cursos
const baseDatos = async () => {
    try {
      return await Cursos
          } catch (error) {
            console.log("Hubo un error en baseDatos", error)
          }
        };


//busco los cursos por el nombre
router.get ("/cursos", async (req, res)=>{
    try {
      const nombre = req.query.nombre;
      const cursosBD = await baseDatos ();
      if (nombre){
          let nombreCurso = await cursosBD.filter(e => e.nombre.toLowerCase().includes(nombre.toLowerCase()));
          nombreCurso.length ?
          res.status(200).send(nombreCurso):
          res.status(404).send("No se encontro el curso");
      }else{
          res.status(200).send(cursosBD)
      }
      
    } catch (error) {
      console.log("Se encontro una falla en el get /cursos", error)
    }
  });
  


//Crear cursos (con la opcion deshabilitar, se oculta el curso, de esta manera no hace falta eliminarlo)
  router.post('/curso', async (req, res) => {
    
  
    const { nombre, imagen, description, deshabilitar} = req.body
    try{
    await Cursos.create({
      nombre, 
      imagen, 
      description, 
      deshabilitar     
    })

  
    res.send(`Curso creado exitosamente`)

}
catch(error){
  console.log("Se presento un error en el Post", error)
}
}
); 





module.exports = router;
