const express = require("express");
const app = express();
const novelcovid = require("novelcovid");

//create route & set engine 
const handlebars = require("express-handlebars");
app.set("view engine","handlebars");
app.engine("handlebars",handlebars({
    defaultView : "home",
    layoutsDir : __dirname +"/views/layouts"
}));

novelcovid.countries().then(response=>{
    console.log(response);
 });

app.get("/",function(req,res){
    //if we want to some data to view to we will send data like this {}(context).
    novelcovid.countries().then((response)=>{
    res.render("home",{info : response});
    });
});

app.listen(8080,()=>{
    console.log("listening to the port");
})