import mongoose from 'mongoose'

const Scheme = new mongoose.Schema({
	name: String,
	age: Number,
})

const model = mongoose.model('user', Scheme)

export default model
