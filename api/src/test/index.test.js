const session = require('supertest-session');
const router = require('../routes/index');
const agent = session(router);


    describe('GET /curso por nombre', () => {
      it('responde 200', () => agent.get('/curso').expect(200));

      it('', () => agent.get('/curso').expect("Content-Type", /json/));

      it('Si no se cargo nada aún, recibe un objeto vacio', () => agent.get('/curso').expect(function (res) {
        expect(res.body).toEqual([]); 
      }));
    });


    describe('GET /todos los cursos', () => {
      it('responde 200', () => agent.get('/cursos').expect(200));
      it('', () => agent.get("/cursos").expect("Content-Type", /json/))
      it('Si no se cargo nada aún, recibe un objeto vacio', () => agent.get('/cursos').expect(function (res) {
        expect(res.body).toEqual([]); 
      }));
      
    });


    describe ("GET / Cursos por ID", function () {
    
      it('responde 404', () => agent.get("/idCurso/xxxxx").expect(404));

      it('Si no se coloca el ID, responde un mensaje', () => agent.get("/idCurso/:id").expect("No se encontro el curso por ID"));

      it('responde con un array vacío si el curso no existe', () => agent.get("/idCurso") .expect(function (res) {
          expect(res.body).toEqual({});
        }));
    });
      




        
        