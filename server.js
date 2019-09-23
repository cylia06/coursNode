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
app.listen(port, function () {
  console.log('Example app listening on port ${port}!')
})


