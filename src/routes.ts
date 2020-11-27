import { Router } from 'express'

import userController from 'services/user'
import authController from 'services/authentication'

const routes = Router()

routes.post('/users', userController.createUser)
routes.post('/auth/local', authController.authUserLocal)

export default routes
