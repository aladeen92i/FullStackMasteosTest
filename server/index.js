// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)

import express from 'express'
import cors from 'cors'
import * as utils from './utils/utils.js'
//import fetch from 'node-fetch'

const app = express()

// Middlewarezz
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

// app.get('/coinTicker', async (req, res) => {
                                         
//     const requestOptions = {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             "Accept-Encoding": "deflate, gzip",
//             "X-CMC_PRO_API_KEY": "2de81a53-a7ad-4538-b69b-2aae41b63efc"
//                 },
//         mode: 'cors',
//         qs: {
//             'start': '1',
//             'limit': '50',
//             'convert': 'USD'
//         },
//         json: true,
//         gzip: true
//         }
//         const result = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', requestOptions)
//         const json = await result.json()
//         let {data} = json 
//         console.log(data)
//         res.status(200).json(data)
// })

app.listen(8080, () => {
	console.log('Server listening on 8080')
})