const express = require('express')
const app = express()
const  port = process.env.PORT ||  3000


const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/chat', (req, res) => {

const message = req.body.msg
console.log('body', typeof req.body, req.body.msg)
if (message === 'ville'){

        res.send('Nous sommes à Paris')
    } else if (message === 'météo') {
        res.send('Il fait beau')
   }

})


app.get('/hell', (req, res) => {

    const coutry = req.query

    res.send('hello'+req.query.nom)
    
    console.log('hello',typeof req.query, req.query.nom)
})

app.get('/hi', (req, res) => {

    const country = req.query
console.log('hello', typeof req.query, req.query)
    if (country === null)
     {
        res.send('Which country?')
     }
    else
     {
        res.send('hello, '+req.query.country +'!')
     }  
})
app.listen(port, function () {
  console.log('Example app listening on port ${port}!')
})

