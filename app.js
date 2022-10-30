const express = require("express");
const app = express();
const body_parser = require("body-parser");

app.use(body_parser.urlencoded({extended:true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

var num1 = Number(req.body.hght);
var num2 = Number(req.body.wght);
var bmi = Number(num2/(num1*num1));

if (bmi < 18.4) {
    res.send("you are underweight" );
  } 
else if (bmi>18.4 && bmi<24.9) {
    res.send("you are normal" );
  }
else if (bmi>24.9 && bmi<39.9) {
    res.send("you are overweight" );
  }
  
else (bmi>40.0) 
{
    res.send("you are obese");
  }

});

app.listen(4000, function(){console.log("server is up");});