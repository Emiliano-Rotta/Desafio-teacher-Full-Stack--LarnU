const { Router } = require('express');
const {Cursos} = require ("../db")
const {Op} = require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//busco los cursos por el nombre
const nombreBaseDatos = async (i) => {
  try {
    let cursos = await Cursos.findAll({
      where: {nombre : {[Op.iLike]:`%${i}%`}}
    })
    console.log (cursos)
    return cursos
        } catch (error) {
          console.log("Hubo un error en nombreBaseDatos", error)
        }
      };

router.get ("/curso", async (req, res)=>{
  try {
    const nombre = req.query.nombre;
    const cursosBD = await nombreBaseDatos (nombre);
    res.send (cursosBD)
    } 
    catch (error) {
    console.log("Se encontro una falla en el get nombreBaseDatos /cursos ", error)
  }
});

//llamado a la base de datos para trerme los cursos
const todoBaseDatos = async (i) => {
    try {
      let cursos = await Cursos.findAll()
      console.log (cursos)
      return cursos
          } catch (error) {
            console.log("Hubo un error en todoBaseDatos", error)
          }
        };

        
router.get ("/cursos", async (req, res)=>{
  try {
    const nombre = req.query.nombre;
    const cursosBD = await todoBaseDatos (nombre);
    res.send (cursosBD)
    } 
    catch (error) {
    console.log("Se encontro una falla en el get todoBaseDatos /cursos ", error)
  }
});



  
  // un get para buscar por ID, para ver el detalle
  router.get("/idCurso/:id", async (req,res)=>{
    const id = req.params.id ;
    const cursosBD = await todoBaseDatos ();
    if (id){
        let idCurso = await cursosBD.filter(e => e.id == id)
        idCurso.length? 
        res.status (200).json (idCurso):
        res.status (404).send ("No se encontro el curso por ID")
    }
  })


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

router.put('/editar/:id', async (req, res) => {
  const id = req.params.id ;
  const cursos = req.body

  try {
      await Cursos.update(Cursos, ({
              where: {
                  id: id
              }
          }))
      
      if(cursos.deshabilitar === true){
          res.send(`Producto Deshabilitado`)
      }else{
          res.send(`Producto actualizado`)
      }
  } catch (error) {
      res.status(404).send("No se pudo actualizar el producto")
  }


}
);

module.exports = router;
