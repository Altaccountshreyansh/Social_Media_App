const express = require('express')
const app = express()

app.get('/', (request, response) => {
	response.send(`<p> hello world </p>`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Listening to Port ${PORT}`)