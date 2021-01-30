const express = require('express')
const app = express()
const cors = require('cors')

// Middlewares
app.use(cors())
app.use(express.json())

app.post('/doubleIt', (req,res) => {
    var {i} = req.body
    i = parseInt(i, 10)
    console.log(i)
    if(typeof i === 'number'){
        const result = i * 2
        res.status(200).json(result)
    }else{
        throw new Error("veuillez entrer un nombre")
    }
})

app.post('/isNumberEven',(req, res) => {
    var {i} = req.body
    i = parseInt(i)
    if (i % 2 === 0) {
        res.status(200).json("it's even !")
    }
    else {
        res.status(200).json("it's odd !")
    }
})

app.post('/whatExtension', (req, res) => {
    var {i} = req.body 
    //is there a point in the string
    if (i.indexOf(".") < 0) {
        res.status(400).json("didnt find file extension")
    }
    // Otherwise, we need to grab and return the extension
    var filenameParts = i.split(".")
    res.status(200).json(filenameParts[filenameParts.length-1])
})

app.post('/longestString', (req, res) => {
    var i = req.body
    var longestLength = 0
    var returnString = ""
    i.forEach(function(item){
        if ((typeof item === 'string') && (item.length > longestLength)) {
            longestLength = item.length
            returnString = item
        }
    })
    res.status(200).json(returnString)
})

app.post('/arraySum', (req,res) => {

    var {payload} = req.body
    var array = JSON.parse(payload) // a refaire peut etre
    var sum = 0

    function arraySum(array) {
        if (typeof array === 'number') {
            sum += parseInt(array);
        } else if (Array.isArray(array)) {
            for (var j=0; j<array.length; j++) {
                arraySum(array[j])
            }
        }
    }
    for (var k=0; k<array.length; k++) {
        arraySum(array[k])
    }
    res.status(200).json(sum)
})

app.listen(8080, () => {
    console.log("Server listening on 8080")
})