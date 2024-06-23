require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hi I am Sujal do you Knoew me!")
})

app.get('/twitter', (req, res) => {
    res.send("you are in the twitter page!")
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})