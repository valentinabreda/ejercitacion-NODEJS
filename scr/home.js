/* 1. Home (/)
a. Título​: ​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.
b. Total de películas en cartelera​: ​(total de películas)
c. Listados de películas
i. Mostrar el listado de películas organizadas alfabéticamente por título.
d. Pié de página​: ​Recordá que podés visitar las secciones:
i. En Cartelera
ii. Más Votadas
iii. Sucursales
iv. Contacto
v. Preguntas Frecuentes
*/

const movies = require('../data/movies');
const cantidadPeliculas = movies.length;
const listadoPeliculas = movies.sort((peli1, peli2) => {
    if( peli1.title < peli2.title){
        return -1;
    }
    if(peli1.title > peli2.title){
        return 1;
    }
    return 0;
})


const infoDeInicio = {
    'Titulo de la pagina': 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.',
    'Total de peliculas en cartelera': cantidadPeliculas,
    'Listado de peliculas': listadoPeliculas,
    'Pie de Pagina': [
        '1. en cartelera',
        '2. mas votadas',
        '3. sucursales',
        '4. contacto',
        '5. preguntas frecuentes',
    ]
};

module.exports = infoDeInicio;
