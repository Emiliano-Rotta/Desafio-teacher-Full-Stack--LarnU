# `Desafío teacher full-stack  - LarnU`

<p align='left'>
    <img height="150" src='https://play-lh.googleusercontent.com/Y5a68xXyL0idUZFNOe7PSxiVnZ3xVlCoRcZiaWI0ozOXGfEdIVSt8I8Ga58hRtzshn_d' />
</p>

#### Tecnologías usadas:
-  React
-  Redux
-  Express
-  Sequelize - Postgres
#### Framework  usado:
-  Material-ui



# Para empezar...

- Clonar el repositorio.

- El proyecto cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

- En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
- Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres.

- Será necesario crear desde psql una base de datos llamada `larnu`



## Instalación:

- En la consola, en `api` introducir, npm install y luego npm start
- En la consola, hacer lo mismo en `client`.


# BASE DE DATOS
La `Base de datos` fue creada usando: postgresSQL.

## Enunciado:

-El modelo de la base de datos cuenta con las siguientes entidades
  - Nombre  (título del curso)
  - Imagen
  - Descripción
  - Deshabilitar (en vez de eliminar el curso, se lo deshabilita; ya no queda visible pero si guardado en la base de datos hasta que se habilite nuevamente. Así no se pierde la información)

- Cuenta de un solo modelo (Cursos) por lo que no hay relaciones entre modelos; quizás en un futuro se podría mejorar si se agrega, por ejemplo, el modelo teacher, donde un teacher puede dictar varios cursos y un curso ser dictado por varios teacher.

# API

El contenido de `api` fue creado con Express:

## Enunciado:

Se desarrolló un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /cursos__:
  - Obtiene un listado de todos los cursos desde la base de datos.
  - En el Front, se usa para traer todos los cursos a la página principal.

- [ ] __GET /idCurso/{id}__:
  - Obtiene el detalle de un curso en particular
  - En el Front, se usa para ir a los detalles del curso.

- [ ] __GET /curso?nombre="..."__:
  - Obtiene el curso que tenga las palabras introducidas. (ya sea en mayúscula o en minúscula)
  - En el Front, se usa para ir el buscador.

- [ ] __POST /curso__:
  - Crea un curso en la base de datos
  - En el Front, se usa para el formulario de creación de cursos.

- [ ] __PUT /editar/{id}__:
  - Edita y/o deshabilita un curso.
  - En el Front, cada curso tiene la posibilidad de editarlo o deshabilitarlo.


# CLIENT:
El contenido de `client` fue creado usando: React.

## Requisitos:

- Listar cursos,
- Crear curso,
- Editar curso,
- Eliminar curso,
- Los cursos tienen una imagen, título y al hacer click en ellos muestra la descripción.

## Agregados:

- 60/70 % responsive.
- Un buscador por nombre
- Un filtro desde el front para buscar alfabeticamente (se encuentra comentado por una cuestion de estetica, pero si se descomenta funciona.)
- Un paginado con la función previous y next
- Se puede subir una foto desde la computadora, con claudinary
- Una foto por default en el caso de que el curso no tenga foto ()
- el formulario de creación tiene validaciones hechas con Javascript.

## Estilos:
- En la página principal Material-UI
- En el resto, CSS (simplemente por cuestiones de tiempo)

## Testing:
- [ ] 
- [ ] 
- [ ] 


## Para seguir mejorando el proyecto:
- La mayoria del código esta en español, pero algunas cosas en inglés. Unificar el idioma (preferentemente hacia el inglés).
- Realizar todo con Material-ui.
- Terminar de hacerlo responsive.
- Para crear y editar el curso, que se haga desde un panel de control que tenga acceso las personas administradoras (para ello hacer un loguin)