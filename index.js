const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {
        title: "Me"
    })
});

app.listen(PORT, (err)=> {
    console.log('Servidor iniciado http://localhost:8080/')
})