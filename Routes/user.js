import express from 'express'
const routes = express.Router();
import { registerValidationRules, validate } from '../Utilis/Validations/validations.js'

import { register, Login } from '../Controllres/user.js';
// @POST USER REGISTRATION
// routes.post('/register', register)

routes.post('/register', registerValidationRules(), validate, register)
routes.post('/login', Login);

export default routes