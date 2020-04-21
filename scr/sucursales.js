/* 4. Sucursales (/sucursales)
a. Título​: ​Nuestras Salas.
b. Total de salas:​ ​(total de salas)
c. Listados de salas. ​Para cada sala mostrar:
i. Nombre ​(nombre de la sala)
ii. Dirección​ (ubicación de la sala)
iii. Descripción​ (descripción de la sala)
*/

const sucursales = require('../data/theaters');
const totalSalas = sucursales.length;
const listadoSalas = sucursales.map(function (sucursales){
    return {'Nombre de la sala': sucursales.name, 'Direccion': sucursales.address, 'Descripcion': sucursales.description};
});


const infoSucursales = {
    'Titulo': 'Nuestras Salas.',
    'Total de salas': totalSalas,
    'Listado de Salas': listadoSalas,
};

module.exports = infoSucursales;