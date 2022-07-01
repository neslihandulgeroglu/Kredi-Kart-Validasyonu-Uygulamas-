import express from 'express';
//var express=require("express");

var _ =require("underscore");
var http=require('http');
var server=http.createServer(function(req,res){
    
});
var bodyParser=require("body-parser");
const v=new fastestvalidator();
var app=express();
var router=express.Router();

app.use(bodyParser.json());


function isValidCardNumber(cardNumber)
{
    let sum = 0;
    let alternate = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) 
    {
        let n = parseInt(cardNumber.substring(i, i + 1));
        if (alternate)
       {
            n *= 2;
            if (n > 9) 
            {
                n = (n % 10) + 1;
            }
        }
        sum += n;
        alternate = !alternate;
    }
    if(sum % 10 == 0)
      return  true;
    else 
        return false;

      
    
}


// main
const cardNumber = process.argv[2];
console.log(isValidCardNumber(cardNumber))

app.listen(8000);
