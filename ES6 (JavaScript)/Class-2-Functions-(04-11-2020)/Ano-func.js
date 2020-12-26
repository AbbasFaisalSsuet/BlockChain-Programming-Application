//   CV Through Anonymous Function
//   CV

console.log("=========================================");
console.log("====================CV===================");
console.log("=========================================");


var Name = function()
{
    return "Faisal"
}

var Ls_Name = function()
{
    return "Abbas"
}

var F_Name = function()
{
    return "Karamat Hussain"
}

var D_O_B = function()
{
    return "09-05-2000"
}

var Mobile = function()
{
    return "0334-0358289"
}

var Email = function()
{
    return "faisalabbasjaffri05@gmail.com"
}

var Religion = function()
{
    return "Islam"
}

var Address = function()
{
    return "House No.603/A Masoom Shah Colony Kalapull Karachi."
}

var Qualification = function()
{
    return "Bachelor's of Science in Computer Science."
}

var Experience = function()
{
    return "Fresh,Wil be furnished upon request."
}


console.log(Name());
console.log(Ls_Name());
console.log(F_Name());
console.log(D_O_B());
console.log(Mobile());
console.log(Email());
console.log(Religion());
console.log(Address());
console.log(Qualification());
console.log(Experience());


//   Calculator Through Anonymous Function
//   CALCULATOR

console.log("============================================");
console.log("=================CALCULATOR=================");
console.log("============================================");


var func = function (x,y)
{
    return x+y
}
function Add ()
{
    var result;
    result = func (20,10)
    console.log("The Addittion is : " + result);
}

Add()

var func = function (x,y)
{
    return x-y
}
function Sub ()
{
    var result;
    result = func (20,10)
    console.log("The Subtraction is : " + result);
}

Sub()


var func = function (x,y)
{
    return x*y
}
function mult ()
{
    var result;
    result = func (20,10)
    console.log("The Multiplication is : " + result);
}

mult()

var func = function (x,y)
{
    return x/y
}
function Div ()
{
    var result;
    result = func (20,10)
    console.log("The Division is : " + result);
}

Div()


//   Taxation Formula Through Anonymous Function

console.log("============================================");
console.log("==================Taxation==================");
console.log("============================================");


function Tax (salary,tax_per)
{
    return (salary*tax_per/100)
}
function Net_icome ()
{
    var result;
    result = Tax (90000,35)
    console.log("The Net Income is :"+ result);
}

Net_icome()

function Tax_1 (salary,tax_per)
{
    return (salary*tax_per/100)
}
function Net_icome_1 ()
{
    var result;
    result = Tax (90000,30)
    console.log("The Net Income is :"+ result);
}

Net_icome_1()

function Tax_2 (salary,tax_per)
{
    return (salary*tax_per/100)
}
function Net_icome_2 ()
{
    var result;
    result = Tax (90000,25)
    console.log("The Net Income is :"+ result);
}

Net_icome_2()