import { config } from 'dotenv'

config({
    path: process.env.NODE_ENV ===  'test' ? '.env.test' : '.env'
});

import express from 'express';
import routes from './router';

class AppController {
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.use(routes);
    }
}


export default new AppController().express


