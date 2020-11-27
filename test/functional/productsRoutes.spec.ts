import supertest from 'supertest'
import faker from 'faker'
import dotenv from 'dotenv-flow'
import app from '../../src/app'
import { connect, disconnect } from '../../src/config/mongo'
import { ProductModel } from '../../src/models/product/productModel'

dotenv.config()

const request = () => supertest(app)

describe('testing products routes', () => {
  beforeAll(async () => await connect())
  afterAll(async () => await disconnect())
  afterEach(async () => {
    await ProductModel.deleteMany({})
  })

  test('list products. GET -> /products', async () => {
    const products = [
      {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription()
      },
      {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription()
      }
    ]

    products.forEach(async element => {
      const product = new ProductModel(element)
      await product.save()
    })

    const { status, body, type } = await request()
      .get('/products')
      .set('Accept', 'application/json')

    expect(status).toBe(200)
    expect(type).toBe('application/json')
    expect(body.length).toBe(2)
  })

  test('create a new product. POST -> /product', async () => {
    const product = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription()
    }

    let products = await ProductModel.find().exec()
    expect(products.length).toBe(0)

    const { status, body, type } = await request()
      .post('/product')
      .send(product)
      .set('Accept', 'application/json')

    expect(status).toBe(200)
    expect(type).toBe('application/json')
    expect(body.name).toBe(product.name)
    expect(body.description).toBe(product.description)

    products = await ProductModel.find().exec()
    expect(products.length).toBe(1)
  })
})
