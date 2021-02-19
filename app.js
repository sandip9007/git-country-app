const express = require('express')
const app = express();
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 4050
const publicDir = path.join(__dirname, '/public')
const viewsDir = path.join(__dirname, '/views')

app.use(express.static(publicDir))
app.set('view engine', 'hbs')
app.set('views', viewsDir)


app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, ()=>{
    console.log(`Server is up on port port ${publicDir}`)
})