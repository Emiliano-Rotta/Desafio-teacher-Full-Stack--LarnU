// const { Router } = require('express');
const {Cursos} = require ("../db")
const {Op} = require('sequelize')
// const router = Router();
const express = require('express');
const Router = express();
const router = Router;



router.use(express.json()); // for parsing application/json

router.get('/', (req, res) => {
    res.send({
      message: 'hola',
    });
  });

  // module.exports = Router;







//Para buscar los cursos por el nombre (servira para el buscador)
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
      reject(new Error("Se encontro una falla en el get nombreBaseDatos /curso ", error))
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
      reject(new Error("Se encontro una falla en el get todoBaseDatos /cursos ", error))
  }
});


//Para buscar los cursos por id (servira para el detalle)
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
  reject(new Error("Se presento un error en el Post", error))
}
}
); 

// Para modificar los cursos
async function updateCurso(id, cursos) {
  const where = { id };
  let curso = await Cursos.findOne({ where });
  if (!curso) throw new Error('El curso no existe en la base de datos.');
  curso.set(cursos);
  return await curso.save();
}

router.put('/editar/:id', async (req, res) => {
  const {id} = req.params;
  const cursos = req.body;
  try {
      const curso = await updateCurso(id, cursos);
      return res.json("Curso editado");
  }
  catch (err) {
      return res.status(500).send(`No se pudo editar la información del curso (${err})`);
  }
});

//Para eliminar los cursos
router.delete('/delete/:id', async (req, res) => {
  const {id} = req.params;

      const curso = await Cursos.findByPk(id);
      if(curso){
        await Cursos.destroy({where:{
            id : id
        }})
       res.json("Curso borrado");
  }
  else res.json(`No existe el curso con ese id`) })

module.exports = router;