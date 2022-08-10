const session = require('supertest-session');
const router = require('../routes/index');
const agent = session(router);


    describe('GET /todos los cursos', () => {

      it('responde mensaje 200', () => agent.get('/cursos').expect(200));
      
      it('Si no se cargo nada aún, recibe un objeto vacio', () => agent.get('/cursos').expect(function (res) {
        expect(res.body).toEqual([]); 
      }));
      it('responde mensaje de error', () => {   
        agent.get("/cursos").send({router}).end((error, res) => {
          if (error) {
          reject(new Error("Se encontro una falla en el get nombreBaseDatos /curso ", error))
        }
        })
      });
      
    });

    describe('GET /curso por query', () => {

      it('responde mensaje 200', () => agent.get('/curso').expect(200));
      
      it('Si no se cargo nada aún, recibe un objeto vacio', () => agent.get('/curso').expect(function (res) {
        expect(res.body).toEqual([]); 
      }));
      it('responde mensaje de error', () => {   
        agent.get("/cursos").send({router}).end((error, res) => {
          if (error) {
          reject(new Error("Se encontro una falla en el get nombreBaseDatos /cursos ", error))
        }
        })
      });
    });


    describe ("GET / Cursos por ID", function () {

      it('responde mensaje 200', () => {     
        agent.get("/idCurso/:id").expect(200)
       });
      it('responde mensaje 404', () => agent.get("/idCurso/x").expect(404));
      it('Si no se coloca el ID, responde un mensaje', () => agent.get("/idCurso/:id").expect("No se encontro el curso por ID"));
      it('devuelve con un objeto vacío si el curso no existe', () => agent.get("/idCurso") .expect(function (res) {
          expect(res.body).toEqual({});
        }));
    });
      

    describe ("Post / Crear un curso", function () {

      it('responde mensaje 200', () => {     
         agent.post('/curso').expect(200)
        });

      it('responde mensaje de error', () => {   
        agent.post('/curso').send({router}).end((error, res) => {
          if (error) {
          reject(new Error("Se presento un error en el Post", error))
        }
        })
      });

      it('Crear un curso', async() => {
        const curso = {
            nombre: "Curso Reack",
            description: "Lunes a Viernes"
        };
        try {
            const count = await Curso.count();
            await agent.post('/curso').send(curso)
      
            const newCount = await Curso.count()
            expect(newCount).toBe(count + 1);
        } catch (err) {
            console.log(`Error ${err}`)
        }
      });
    });
        


    describe ("PUT / editar cursos", function () {

      it('responde mensaje 200', () => {     
        agent.put("/editar/:id").expect(200)
       });
      
      it('devuelve con un array vacío si el curso no existe', () => agent.put("/editar/:id") .expect(function (res) {
        expect(res.body).toEqual({});
      }));
    });