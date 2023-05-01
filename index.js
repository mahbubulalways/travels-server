const express = require('express')
const app = express()
const port = 9500
const cors=require('cors')
const place =require('./data/place.json')
app.use(cors())
app.get('/place', (req, res) => {
  res.send(place)
})
app.get('/place/:id', (req, res) => {
  const id =parseFloat(req.params.id)
  const selected =place.find(p=>p.id===id)
  res.send(selected)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
