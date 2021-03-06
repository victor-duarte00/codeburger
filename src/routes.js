import { Router } from 'express'

import UserController from './app/controllers/UserController'
const routes = new Router()

routes.get('/users', UserController.store)

export default routes
