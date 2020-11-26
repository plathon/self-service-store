import { Router } from 'express'

import userController from 'services/user'

const routes = Router()

routes.post('/users', userController.createUser)

export default routes
