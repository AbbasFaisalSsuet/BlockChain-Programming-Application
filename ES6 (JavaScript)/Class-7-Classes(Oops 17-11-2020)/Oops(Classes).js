///           STudent CV Through Class Getter Function


class Personal_Info {
    constructor(Name,f_name,Nic_no,Email,Number){
        this.Nm = Name;
        this.Fn = f_name;
        this.nic = Nic_no;
        this.Mail = Email;
        this.Nmbr = Number
    }
    
    get Data() {
        return console.log(`\n\tName : ${this.Nm} \n\tF_Name : ${this.Fn} \n\tNic_Number : ${this.nic} \n\tEmail : ${this.Mail} \n\tNumber : ${this.Nmbr}`);
    }

}

var Cv = new Personal_Info("Faisal Abbas","Karamat Hussain","42301-4102229-9","faisalabbasjaffri05@gmail.com","0334-0358289");
Cv.Data


//           School Managment System Through Inheritance Getter Setter Function


class Student{
    constructor(Name,F_Name,Class,Semester,Roll_no){
        this.Nm = Name;
        this.F_Nm = F_Name;
        this.Cls = Class;
        this.Smstr = Semester;
        this.Rolno = Roll_no;
    }

    get Name(){
        return this.Nm;
    }
    get F_Name(){
        return this.F_Nm;
    }
    get Class(){
        return this.Cls;
    }
    get Semester(){
        return this.Smstr;
    }
    get Roll_no(){
        return this.Rolno;
    }
}
class Stdfees extends Student {

    set Fees(value)
    {
        this.Fes = value;
    }
    set Monthly_Fees(value)
    {
        this.Monthly_Fes = value;
    }
    set Games_Fees(value)
    {
         this.Games_Fes = value;
    }
    Output ()
    {
        console.log("============================================");
        console.log("===========School Managment System==========");
        console.log("============================================");

        console.log("\t===========Student Record==========");

        console.log(`\t Student Name : ${this.Nm} \n\t Father Name : ${this.F_Nm}`);
        console.log(`\t Student Class : ${this.Cls} \n\t Student Semester : ${this.Smstr}`);
        console.log(`\t Student RollNo : ${this.Rolno}`);

        console.log("\t===========Student Fees Record==========");

        console.log(`\t Admission Fees : ${this.Fes} \n\t Monthly Fees : ${this.Monthly_Fes}`);
        console.log(`\t Games Fees : ${this.Games_Fes}`);
    }
}

var obj = new Stdfees ("Faisal Abbas","Karamat Hussain","BlockChain A","III","16252029")
obj.Fees = "20,000";
obj.Monthly_Fees = "10,000";
obj.Games_Fees = 500;

obj.Output()

//  Calculator Through Static Class Function

class Calculator{
    static add(x,y) 
    {
        return x+y;
    }
    static sub(x,y) 
    {
        return x-y;
    }
    static mult(x,y) 
    {
        return x*y;
    }
    static div(x,y) 
    {
        return x/y;
    }
    static Sqrt(y) 
    {
        return Math.sqrt(y);
    }
    static square(x) 
    {
        return (x*x);
    }
}

console.log("==========================================");
console.log(`The Addition is = ${Calculator.add(40,59)}`);
console.log("==========================================");
console.log(`The Subtraction is = ${Calculator.sub(18,59)}`);
console.log("==========================================");
console.log(`The Multiplication is = ${Calculator.mult(40,59)}`);
console.log("==========================================");
console.log(`The Division is = ${Calculator.div(49,5)}`);
console.log("==========================================");
console.log(`The Square Rooot is = ${Calculator.Sqrt(59)}`);
console.log("==========================================");
console.log(`The Square is = ${Calculator.square(59)}`);
console.log("==========================================");