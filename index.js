const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.get('/getUsers', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


const db = require('./dbcon')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/users', db.getUsers)


app.listen(port, () => {
    console.log('${port}')
  })
  