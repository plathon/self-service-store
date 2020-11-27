import { Router } from 'express'

import userController from 'services/user'
import authController from 'services/authentication'

import productController from 'services/product'

const routes = Router()

routes.post('/users', userController.createUser)
routes.post('/auth/local', authController.authUserLocal)

routes.post('/product', productController.createProduct)
routes.get('/products', productController.listProducts)

export default routes
