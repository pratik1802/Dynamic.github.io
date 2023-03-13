const express=require('express');
const app=express();
const path = require('path');
const port=process.env.PORT||3000;



const hbs=require('hbs')
// const partialsPath=path.join(__dirname,'../views/partials')
app.use(express.static('.'))


// hbs.registerPartials(partialsPath);






app.set('view engine' , 'hbs');





app.get('/',(req,res)=>{
    res.render('Home')

})
app.get('/services',(req,res)=>{
    res.render('services')

})
app.get('/about',(req,res)=>{
    res.render('about')


})




app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})