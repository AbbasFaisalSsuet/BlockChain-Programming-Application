//       CV Through Lamda Function

console.log("===========================");
console.log("===========CV==============");
console.log("===========================");


var name = () =>
{
    console.log("Faisal Abbas");
}

var f_name = () =>
{
    console.log("Karamat Hussain");
}

var mobile = () =>
{
    console.log("0334-0358289");
}

var D_O_B = () =>
{
    console.log("09-05-2000");
}

var email = () =>
{
    console.log("faisalabbasjaffri05@gmail.com");
}

var religion = () =>
{
    console.log("Islam");
}

var Address = () =>
{
    console.log("Masoom Shah Colony Kalapull Karachi.");
}

var qualification = () =>
{
    console.log("BSCS Semester III");
}

var experience = () =>
{
    console.log("Will be furnished upon request");
}

name()
f_name()
mobile()
D_O_B()
email()
religion()
Address()
qualification()
experience()


//       Calculator Through Lamda Function

console.log("===================================");
console.log("=============CALCULATOR============");
console.log("===================================");


var add = (a,b) => sum = a + b
{
    console.log("The Addition is :",add(5,10));
}

var sub = (a,b) => sub = a - b
{
    console.log("The Subtraction is :",sub(15,10));
}

var  mult = (a,b) => mult = a * b
{
    console.log("The Multiplication is :",mult(10,15));
}

var div = (a,b) => div = a / b
{
    console.log("The Division is :",div(20,10));
}



//       CV Through This.Lamda Function

console.log("===========================");
console.log("===========CV==============");
console.log("===========================");


function CV (firstName,lastName,f_name,email,mobile,religion,address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.f_name = f_name;
    this.email = email;
    this.mobile = mobile;
    this.religion = religion;
    this.address = address;

    this.CVUsingArrow = function(){
    setTimeout(()=>{
    console.log(this.firstName+ "\n" +this.lastName)
    },2000)
    }
    setTimeout(()=>{
        console.log(this.f_name+ "\n" +this.email)
        },3000)
    setTimeout(()=>{
        console.log(this.mobile+ "\n" +this.religion)
        },4000)

    setTimeout(()=>{
        console.log(this.address)
        },5000)
    }
    const s1 = new CV ('Faisal','Abbas','Karamat Hussain','faisalabbasjaffri05@gmail.com','0334-0358289','Islam','Masoom Shah Colony Kalapull')
    s1.CVUsingArrow();