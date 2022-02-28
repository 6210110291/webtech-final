const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

let count = 0
app.get('/api/read', async (req, res) => {
  count = parseInt(req.query.count)
  res.send('' + count)
})

app.post('/api/increase', async (req, res) => {
  count = req.body.count
  count = count + 1
  res.send({ count: count })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})