const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Midlewares
        this.middlewares();

        //rutas de la app
        this.routes()

        //Configuracion de sockets
        this.sockets();
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        //Directorio publico estatico
        this.app.use(express.static('public'));
    }

    routes() {
        //this.app.use(this.paths.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on('connection', socketController)
    }

    listen() {
        this.server.listen(this.port)
    }
}

module.exports = Server;