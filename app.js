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

