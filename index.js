const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000


 const {createUser,UpdateUser} = require('./dbcon')
const {getUsers} = require('./query')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/users', getUsers)
app.post('/insert', createUser)
app.post('/update', UpdateUser)
app.post('/Delete', UpdateUser)



app.listen(port, () => {
    console.log('${port}')
  })
  