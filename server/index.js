import express from 'express'
import cors from 'cors'
import * as utils from './utils/utils.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/doubleIt', (req,res) => {
	let {toDouble} = req.body
	toDouble = parseInt(toDouble, 10)
	res.status(200).json(utils.doubleIt(toDouble))
})

app.post('/isNumberEven',(req, res) => {
	let {isEven} = req.body
	isEven = parseInt(isEven, 10)
	res.status(200).json(utils.isEven(isEven))
})

app.post('/whatExtension', (req, res) => {
	let {fileName} = req.body 
	res.status(200).json(utils.whatExtension(fileName))
})

app.post('/longestString', (req, res) => {
	let stringArray = req.body
	res.status(200).json(utils.longestString(stringArray))
})

app.post('/arraySum', (req,res) => {

	let {payload} = req.body
	let array = JSON.parse(payload)
	res.status(200).json(utils.sumNestedArrays(array))
})

app.listen(8080, () => {
	console.log('Server listening on 8080')
})
