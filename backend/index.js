require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const User = require('./models/user')

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (request, response) => {
	response.send(`<p> hello world </p>`)
})

app.get('/api/user', (request, response) => {
	response.json(user);
})
app.post('/api/user/signup', (request, response) => {
	console.log(request)
	const body = request.body

	const user_data = new User({
		name : body.name,
		email : body.email,
		password : body.password,
	})

	user_data.save()
		.then(savedUser => {
			console.log(savedUser)
			response.json(savedUser)
		})
		.catch(error => {
			console.log(error)
		})

})
app.post('/api/user/signin', (request, response) => {
	// console.log(request.body)
	const body = request.body

	User.find({email : body.email})
		.then(result => {
			if(result[0].password === undefined) {
				console.log(result[0].password)
				response.status(404).json({message : "failure"})
			}
			else if(result[0].password === body.password) {
				response.status(200).json({message : "success"})
			}
			else {
				response.status(404).json({message : "failure"})
			}
		})
		.catch(error => {
			console.log(error)
		})
})
const PORT = process.env.PORT
app.listen(PORT)
console.log(`Listening to Port ${PORT}`)