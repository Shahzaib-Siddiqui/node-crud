const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000


 const {createUser,UpdateUser,DeleteeUser,fetch,counttask} = require('./dbcon')
const {getUsers} = require('./query')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/users', getUsers)
app.get('/task', counttask)
app.post('/insert', createUser)
app.post('/update', UpdateUser)
app.post('/Delete', DeleteeUser)
app.post('/fetch', fetch)



app.listen(port, () => {
    console.log('${port}')
  })
  