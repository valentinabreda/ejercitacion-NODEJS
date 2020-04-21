/*3. Más Votadas (/mas-votadas)
Mostrar todas aquellas películas cuyo rating (​vote_average​) sea mayor o igual a 7.
a. Título​: ​Más Votadas.
b. Total de películas​: ​(total de películas que cumplan la condición)
c. Rating promedio. ​(promedio de rating de estas películas)
d. Listados de películas. ​Para cada película mostrar:
i. Título (​ título de la película)
ii. Rating​ (rating de la película)
iii. Reseña​ (reseña de la película)
*/

const movies = require('../data/movies');

const masVotadas = movies.filter (pelis => {return pelis.vote_average >= 7}); 
const totalMasVotadas = masVotadas.length;
const listaPelis = masVotadas.map(function (masVotadas){
    return {'Titulo de la Pelicula': masVotadas.title, 'Reseña de la pelicula': masVotadas.overview, 'Rating': masVotadas.vote_average};
});

//FALTA RATING PROMEDIO
//en masvotadas movies.vote_overage tiene el rating. 


const infoVotadas = {
    'Titulo': 'Mas votadas',
    'Total de Peliculas': totalMasVotadas,
    'Rating promedio': '',
    'Listado de peliculas': listaPelis,
    };

console.log(infoVotadas);
module.exports = infoVotadas;