const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = config(express())

const loginRouter = require('./routes/loginRouter')

app.use(bodyParser.json( {
  limit: process.env.LIMIT_REQUEST_SIZE
 }))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: process.env.LIMIT_REQUEST_SIZE
}))
app.use(cors())
app.use('/api/v1/', loginRouter)

app.listen(app.get('port'), () => {
    console.log('Server start on port --->', app.get('port'));
  });