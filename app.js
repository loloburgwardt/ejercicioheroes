const express= require('express');
const app= express();
const homeRoute= require('./routes/home')
const heroesRoute=require('./routes/heroes')
const creditosRoute=require('./routes/creditos')

app.listen(3000, function(){
    console.log('Server running in port 3000')
})

app.use('/', homeRoute);
app.use('/heroes', heroesRoute);
app.use('/creditos', creditosRoute)