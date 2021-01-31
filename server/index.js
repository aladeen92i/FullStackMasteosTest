// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)

import express from 'express'
import cors from 'cors'

//import fetch from 'node-fetch'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

app.post('/doubleIt', (req,res) => {
	let {toDouble} = req.body
	toDouble = parseInt(toDouble, 10)
	if(typeof toDouble === 'number'){
		const result = toDouble * 2
		res.status(200).json(result)
	}else{
		throw new Error('veuillez entrer un nombre')
	}
})

app.post('/isNumberEven',(req, res) => {
	let {isEven} = req.body
	isEven = parseInt(isEven)
	if (isEven % 2 === 0) {
		res.status(200).json('it\'s even !')
	}
	else {
		res.status(200).json('it\'s odd !')
	}
})

app.post('/whatExtension', (req, res) => {
	let {fileName} = req.body 
	//is there a point in the string
	if (fileName.indexOf('.') < 0) {
		res.status(400).json('didnt find file extension')
	}
	// Otherwise, we need to grab and return the extension
	let filenameParts = fileName.split('.')
	res.status(200).json(filenameParts[filenameParts.length-1])
})

app.post('/longestString', (req, res) => {
	let payload = req.body
	let longestLength = 0
	let returnString = ''
	payload.forEach(function(item){
		if ((typeof item === 'string') && (item.length > longestLength)) {
			longestLength = item.length
			returnString = item
		}
	})
	res.status(200).json(returnString)
})

app.post('/arraySum', (req,res) => {

	let {payload} = req.body
	let array = JSON.parse(payload)

	function sumNestedArrays(array) {
		// avoid modifying the original array
		const stack = array.slice()
		// je vais utiliser cette liste comme un stack sous mon controle
		// donc je copie la liste originale pour éviter de la manipuler
		let total = 0
		while (stack.length !== 0) {
			const item = stack.pop()
			if (typeof item === 'number') {
				total += item
			}
			else if (item instanceof Array) {
				// avoid recursion and smashing the stack
				for (const innerItem of item) {
					stack.push(innerItem)
				}
				// j'évite la syntaxe `stack.push(...item)`, qu'on pourrait utiliser
				// à la place de la boucle, pour éviter de saturer le call stack
				// j'évite l'appel de fonction récursive pour la même raison
			}
		}
		return total
	}
	res.status(200).json(sumNestedArrays(array))
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