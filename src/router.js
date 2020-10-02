import { Router } from 'express';
import { User } from './app/models';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/user', UserController.store)

//User.create({ name:'Matheus', email:'mateheusoliver@gmail.com', password_hash:'12031jd1wd113'})

export default routes;