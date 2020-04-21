  
const http = require('http');
const fs = require('fs');

const moduloHome = require('./scr/home');
const moduloCartelera = require('./scr/cartelera');
const moduloMasVotadas = require('./scr/masVotadas');
const moduloSucursales = require('./scr/sucursales');
const moduloContacto = require('./scr/contacto');
const moduloPreguntasFrecuentes = require('./scr/preguntasFrecuentes');


// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':
			res.end(JSON.stringify(moduloHome));
			break;
		// En cartelera
		case '/en-cartelera':
			res.end(JSON.stringify(moduloCartelera));
			break;
		case '/mas-votadas':
			res.end(JSON.stringify(moduloMasVotadas));
			break;
		case '/sucursales':
			res.end(JSON.stringify(moduloSucursales));
			break;
		case '/contacto':
			res.end(JSON.stringify(moduloContacto));
			break;
		case '/preguntas-frecuentes':
			res.end(JSON.stringify(moduloPreguntasFrecuentes));
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));