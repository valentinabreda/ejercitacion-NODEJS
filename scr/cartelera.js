/*2. En Cartelera (/en-cartelera)
a. Título​: ​En Cartelera.
b. Total de películas​: ​(total de películas)
c. Listados de películas. ​Para cada película mostrar:
i. Título (​ título de la película)
ii. Reseña​ (reseña de la película)
*/


const movies = require('../data/movies');
const totalPeliculas = movies.length;
const tituloRes = movies.map(function (movies){
    return {'Titulo de la Pelicula': movies.title, 'Reseña de la pelicula': movies.overview};
});

const infoCartelera = {
    'Titulo': 'En cartelera',
    'Total De Peliculas': totalPeliculas,
    'Listado De Peliculas': tituloRes,
}

module.exports = infoCartelera;