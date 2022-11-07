const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000


const db = require('./dbcon')
const {getUser} = require('./query')

// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// )

app.get('/users', getUser)


app.listen(port, () => {
    console.log('${port}')
  })
  