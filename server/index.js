import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'

import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

//data imports

// CONFIGURATION

dotenv.config()

const app = express()
app.use(express.json())

app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))

app.use(morgan('common'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

// ROUTES
app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

		// only add data one time
		// User.insertMany(dataUser)
		// Product.insertMany(dataProduct)
		// ProductStat.insertMany(dataProductStat)
		// Transaction.insertMany(dataTransaction)
	})
	.catch(error => console.log(`${error} did not conncted`))
