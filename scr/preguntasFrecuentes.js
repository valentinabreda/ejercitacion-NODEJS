/*6. Preguntas Frecuentes (/preguntas-frecuentes)
a. Título​: ​Preguntas Frecuentes.
b. Total de preguntas​: ​(total de preguntas)
c. Listados de preguntas. ​Para cada preguntas mostrar:
i. Pregunta ​(título de la pregunta)
ii. Respuesta​ (texto de la respuesta)
*/

const preguntasFrec = require('../data/faqs');

const totalPreguntas = preguntasFrec.length;
const listadoPreg = preguntasFrec.map (function(preguntasFrec){
    return {'Pregunta': preguntasFrec.faq_title, 'Respuesta': preguntasFrec.faq_answer};
});

const infoPreguntas = {
    'Titulo': 'Preguntas Frecuentes',
    'Total de preguntas': totalPreguntas,
    'Listado de prefuntas': listadoPreg,
};

module.exports = infoPreguntas;