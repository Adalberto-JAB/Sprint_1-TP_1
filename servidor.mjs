import http from 'http';

const hostname = '127.0.0.1';
const port = 3000; // Se puede cambiar el puerto si es necesario o solo para fines educativos

const server = http.createServer(( req, res ) => {
  res.statusCode = 200;
  res.setHeader( 'Content-Type', 'text/plain' );
  res.end('Hola Mundo, desde Catamarca');
});

server.listen(port, hostname, () => {
  console.log(`Servidor escuchando en el puerto ${port} y corriendo en el ip ${hostname}`);
});
// url = http://localhost:3000/127.0.0.1:3000

