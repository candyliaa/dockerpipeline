const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Why is it always Hello World!, and never How is World?! :(</h1>')
})

const PORT = 8080

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
