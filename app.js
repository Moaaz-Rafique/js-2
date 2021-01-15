//Changing Cases
//1
var a=prompt("Enter your Name")
alert(a.toUpperCase())
//2
var b=prompt("Enter your Name")
c=b[0].toUpperCase() + b.slice(1).toLowerCase();
alert(c)

//Strings: measuring length and extracting parts
//1
var a=prompt("Enter your favorite mobile phone model")

document.write("Length is: "+a.length)
//2
var a=prompt("Enter any string")
document.write("Last character is: "+a[a.length-1])

//Strings: finding segments
//1
var a="Pakistani"
var b=a.indexOf("z")
document.write("n is at: "+b)
//2 
var found=true;
do{
    var a=prompt("Please enter a name valid name")
    if(a.match(/[\@\.\,\!]/g)==null){
        found=false
    }
}while(found)
//3
var a="The quick brown fox jumps over the lazy dog"
var b=a.match(/the/g).length
alert(b)

//Strings: finding a character at a location
var a="Pakistani"
var b=a[2]
document.write("Value at 3rd index is "+b)


//Strings: replacing characters
//1
var a = "Hyderabad"
var b=a.replace("Hyder","Islam")
alert(b)
//2
var a = "Ali and Sami are best friends. They play cricket and football together."
var b=a.replace(/and/g,"&")
alert(b)



//Rounding numbers
//1
var a=+prompt("Please enter a positive integer")
document.write("<br>number  "+a)
document.write("<br>rounded  "+Math.round(a))
document.write("<br>floored  "+Math.floor(a))
document.write("<br>ceiled  "+Math.ceil(a))
//2
var a=+prompt("Please enter a negative floating point number")
document.write("<br>number  "+a)
document.write("<br>rounded  "+Math.round(a))
document.write("<br>floored  "+Math.floor(a))
document.write("<br>ceiled  "+Math.ceil(a))

//Generating random numbers
//1
document.write("Value of dice is "+(Math.ceil(Math.random()*6)))
//2
if(Math.round(Math.random())){
    document.write("<br>It is Heads")
}
else
    document.write("<br>It is Tails")

var s=Math.ceil(Math.random()*10)
var g=+prompt("Please enter your guess")
if(g==s)
    alert("Congrats you guessed the number")
else
    alert("You could not guess the number. Better Luck next time")

//Converting strings to integers and decimals
//1
var a=prompt("Please enter your weight")
var b=parseFloat(a)
document.write("<br>Your weight is "+b)

//2
var a="472"
document.write("<br>"+a+" is "+(typeof a))
var b= parseInt(a)
document.write("<br>"+b+" is "+(typeof b))
var a=35.36
var b=a.toString()
var c=b.replace(".","")
document.write("<br>"+c)

//Controlling the length of decimals
var a=30/45
var b=a.toFixed(2)
document.write("<br>"+b)