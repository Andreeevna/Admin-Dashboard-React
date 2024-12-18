import express from 'express'
import {
	getCustomers,
	getProducts,
	getTransaction,
} from '../controllers/client.js'

const router = express.Router()

router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/transaction', getTransaction)

export default router
