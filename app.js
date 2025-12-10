// Q1

var city = prompt ("Enter your city");
if ( city === "Karachi") {
    console.log(" Welcome tocity of lights");
} else{
    console.log ("bye");
}

// Q2

var gender = prompt ("Enter your gender");
if (city === "male") {
    console.log(" Hello sir");
}
if  (gender === "female"){
    console.log("Hello Ma'am");
}

// Q3

var signalcolor = prompt("Enter your color");
if (signalcolor === "Red"){
    console.log("Must stop")
}

var signalcolor = prompt("Enter your color");
if (signalcolor === "Yellow"){
    console.log("Ready")
}

var signalcolor = prompt("Enter your color");
if (signalcolor === "Green"){
    console.log("Go")
}

// Q4

var fuel_In_liter;
fuel_In_liter = Number(prompt("Enter your Fuel Reading! between 0.1 and  1"));

if(fuel_In_liter<=0.25);
    
{
  console.log("Please refill the fuel!");
}

// Q5

var a =4;
if(++a === 5);
{
    console.log("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

  var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Q6

var total_mark = 300;

var subject01_obtain =Number(prompt("enter marks of first Subject!"))
var subject02_obtain =Number(prompt("enter marks of Second Subject!"))
var subject03_obtain =Number(prompt("enter marks of Third Subject!"))

var obtain_marks_total = (subject01_obtain + subject02_obtain + subject03_obtain)
var percentage = (obtain_marks_total/total_mark)*100;

console.log(percentage)
if(percentage >= 80)
{
   console.log("Total marks : " + total_mark)

   console.log("Marks obtained : " + obtain_marks_total)
   console.log("Grade : A+ " )
   console.log("Remarks : Excellent")
}
if(percentage >= 70)
{
   console.log("Total marks : " + total_mark)
   console.log("Marks obtained : " + obtain_marks_total)
   console.log("Grade : A ")
   console.log("Remarks : Good")
}
if(percentage >= 60)
{
   console.log("Total marks : " + total_mark)
   console.log("Marks obtained : " + obtain_marks_total)
   console.log("Grade : B ")
   console.log("Remarks : You need to improve")
}

if(percentage <= 60)
{
   console.log("Total marks : " + total_mark)
   console.log("Marks obtained : " + obtain_marks_total)
   console.log("Grade :  Fail")
   console.log("Remarks : Sorry")
}

// Q7

var secretNumber = 8;
var userNumber = Number(prompt("Enter Number Between 1 and 10!"))
if( userNumber === secretNumber)
{
    console.log("Bingo! Correct Answer");
}
if(userNumber+1 === secretNumber)
{
    console.log("Close enough to the correct answer")
}
else
{
    console.log("Try again!")
}

// Q8

var secretNumber = 8;
var userNumber = Number(prompt("Enter Number Between 1 and 10!"))
if( userNumber === secretNumber)
{
    console.log("Bingo! Correct Answer");
}
if(userNumber+1 === secretNumber)
{
    console.log("Close enough to the correct answer")
}
else
{
    console.log("Try again!")
}

// Q9

var userNumber = Number(prompt("Enter your Number to check its 'Even' or 'Odd' "));

if((userNumber % 2)=== 0)
    {
    console.log("Your Number is Even ")
}
else
{
    console.log("Your Number is Odd ")
}

// Q10

var Temp = Number(prompt("Enter the Tempreture Please!"))
if(Temp >= 40)
{
    console.log("It is too hot outside.");
}
if(Temp >= 30)
{
    console.log("The Weather today is Normal.");
}
if(Temp >= 20)
{
    console.log("Today's Weather is cool.");
}
if(Temp >= 10)
{
    console.log("OMG! Today's weather is so Cool.");
}

// Q11

var user_Number01 = Number(prompt("Enter your first Number to Calculation"));
var user_Number02 = Number(prompt("Enter your Second Number to Calculation"));
var user_Operator = prompt("Enter desire Symbole for Calculation");

if(user_Operator === "+")
{
    console.log("Addition : "+ (user_Number01+user_Number02));
}
if(user_Operator === "-" )
{
    console.log("Subtraction : "+(user_Number01-user_Number02));
}
if(user_Operator === "*" )
{
    console.log("Muiltiplication : "+(user_Number01*user_Number02));
}
if(user_Operator === "/" )
{
    console.log("Divide : "+(user_Number01/user_Number02));
}
if(user_Operator === "%" )
{
    console.log("Remainder : "+(user_Number01%user_Number02));
}