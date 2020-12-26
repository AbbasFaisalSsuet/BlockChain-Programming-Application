//                      School Managment Model Through Oops

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

        console.log("\t=========Student Fees Record========");

        console.log(`\t Admission Fees : ${this.Fes} \n\t Monthly Fees : ${this.Monthly_Fes}`);
        console.log(`\t Games Fees : ${this.Games_Fes}`);
    }
}

var obj = new Stdfees ("Faisal Abbas","Karamat Hussain","BlockChain A","III","16252029")
obj.Fees = "20,000";
obj.Monthly_Fees = "10,000";
obj.Games_Fees = 500;

obj.Output()

//                      Library Managment Model Through Oops

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
var BookArr = []
class Books extends Student {

    set Book (value)
    {
        BookArr.push(value);
    }

    LibraryManagment ()
    {
        console.log("============================================");
        console.log("===========Library Managment System==========");
        console.log("============================================");

        console.log("\t===========Student Record==========");

        console.log(`\t Student Name : ${this.Nm} \n\t Father Name : ${this.F_Nm}`);
        console.log(`\t Student Class : ${this.Cls} \n\t Student Semester : ${this.Smstr}`);
        console.log(`\t Student RollNo : ${this.Rolno}`);

        console.log("\t===========Student Book Borrow Record==========");

        console.log(`\t Student Book Borrow : ${BookArr}`);
    }
}

var obj = new Books ("Faisal Abbas","Karamat Hussain","BlockChain A","III","16252029")
obj.Book = "ch1";
obj.Book = "phy3";
obj.Book = "Comp4";
obj.LibraryManagment()

//                      Hospital Managment Model Through Oops

class Module_1 {
    constructor(Patient_Name, Father_Name, Date, Time, Nic_No, Patient_Ward,
        Patient_Ills_Array, Dr_Name_Fields, Generate_Bar_Code) {
        this.PatientName = Patient_Name;
        this.FatherName = Father_Name;
        this.Dte = Date;
        this.tme = Time;
        this.NicNo = Nic_No;
        this.PatientWard = Patient_Ward;
        this.PatientIllsArray = Patient_Ills_Array
        this.DrNameFields = Dr_Name_Fields
        this.GenerateBarCode = Generate_Bar_Code;
    }
    get Patient_Name() {
        return this.PatientName;
    }
    get Father_Name() {
        return this.FatherName;
    }
    get Date() {
        return this.Dte;
    }
    get Time() {
        return this.tme;
    }
    get Nic_No() {
        return this.NicNo;
    }
    get Patient_Ward() {
        this.PatientWard;
    }
    get Patient_Ills_Array() {
        this.PatientIllsArray;
    }
    get Dr_Name_Fields() {
        this.DrNameField;
    }
    get Generate_Bar_Code() {
        this.GenerateBarCode;
    }
}

class Module_2 extends Module_1 {

    set DrAppointmentTime (value) {
        this.Dr_Appointment_Time = value;
    }
    set DrTimeMatch(value) {
        this.Dr_Time_Match = value;
    }
    set AppointmentFees(value) {
        this.Appointment_Fees = value;
    }
    set FeesOption(value) {
        this.Fees_Option = value;
    }

    Hospital_Managment() {
        console.log("\t\t===================================================");
        console.log("\t\t==============Hospiatl Managment System============");
        console.log("\t\t===================================================");


        console.log("\t\t==============Patient Record============");
        console.log(`\t\tPatient Name : ${this.PatientName}`);
        console.log(`\t\tFather Name : ${this.FatherName}`);
        console.log(`\t\tDate : ${this.Dte}`);
        console.log(`\t\tTime : ${this.tme}`);
        console.log(`\t\tNic No : ${this.NicNo}`);
        console.log(`\t\tPatient Ward : ${this.PatientWard}`);
        console.log(`\t\tPatient Ills Array : ${this.PatientIllsArray}`);
        console.log(`\t\tDoctor Name Fields : ${this.DrNameFields}`);
        console.log(`\t\tGenerate Bar Code : ${this.GenerateBarCode}`);


        console.log("\t\t==============Doctor Record============");
        console.log(`\t\tDr.Appointment Time : ${this.Dr_Appointment_Time}`);
        console.log(`\t\tDr.Time Match : ${this.Dr_Time_Match}`);
        console.log(`\t\tAppointment Fees : ${this.Appointment_Fees}`);
        console.log(`\t\tFees Option : ${this.Fees_Option}`);
    }
}
var Patient_Ills_Array = ["Fever", "Flu", "BP"]
var Dr_Name_Fields = [1, 2, 3, 4, 5, 6, 7]
var Fees_Option = ["Online", "Card Option", "Cash Option", "Get Received"]


var obj = new Module_2("Faisal Abbas", "Karamat Hussain", "27-11-2020", "09:00", "42301-4102229-9", "2", Patient_Ills_Array[0], Dr_Name_Fields[6],
    "X210230")

obj.Dr_Appointment_Time = "08:30";
obj.Dr_Time_Match = "09:00 (No)";
obj.Appointment_Fees = "2,000";
obj.Fees_Option = Fees_Option[2];

obj.Hospital_Managment()

//                      Accounting Model Through Oops

class Employee 
{
    constructor (Employee_Id,Employee_Name,Father_Name,Nic_No,Attendence,OverTime_Allowance)
    {
        this.EmployeeID = Employee_Id;
        this.EmployeeName = Employee_Name;
        this.FatherName = Father_Name;
        this.NicNo = Nic_No;
        this.EmpAttendence = Attendence;
        this.OvrtimeAllowance = OverTime_Allowance;
    }
}

class Salary extends Employee
{
    set Empfixsalary(value)
    {
        this._Empfixsalary = value;
    }
    set Empadvancesalary(value)
    {
        this._Empadvancesalary = value;
    }
    set Emptravellingallowance(value)
    {
        this._Emptravellingallowance = value;
    }
    set Empbonusallowance(value)
    {
        this._Empbonusallowance = value;
    }
    set Empbonuspermonth(value)
    {
        this._Empbonuspermonth = value;
    }
    set Emptexpermonth(value)
    {
        this._Emptexpermonth = value;
    }
    set CalAllSalary(value)
    {
        this._CalAllSalary = value;
    }
    set AfterReceive(value)
    {
        this._AfterReceive = value;
    }

    AcoountingModel()
    {
        var CalAllSalary = this._Empfixsalary+this._Empadvancesalary+this._Emptravellingallowance+this._Empbonusallowance+this._Empbonuspermonth-this._Emptexpermonth;

        console.log("===========================================================");
        console.log("========================Employee Details===================");
        console.log("===========================================================");

        console.log(`Employee ID : ${this.EmployeeID}`);
        console.log(`Employee Name : ${this.EmployeeName}`);
        console.log(`Employee Father Name : ${this.FatherName}`);
        console.log(`Employee Nic No : ${this.NicNo}`);
        console.log(`Employee Attendence : ${this.EmpAttendence}`);
        console.log(`Employee OverTime Allowance : ${this.OvrtimeAllowance}`);

        console.log("===========================================================");
        console.log("=========================Salary Details====================");
        console.log("===========================================================");

        console.log(`Employee Fix Salar : ${this._Empfixsalary}`);
        console.log(`Employee Advance Salary : ${this._Empadvancesalary}`);
        console.log(`Employee Travelling Allowance : ${this._Emptravellingallowance}`);
        console.log(`Employee Bonus Allowance : ${this._Empbonusallowance}`);
        console.log(`Employee Bonus Per Month : ${this._Empbonuspermonth}`);
        console.log(`Employee Tax Per Month : ${this._Emptexpermonth}`);

        console.log("===========================================================");
        console.log("==========================Total Salary=====================");
        console.log("===========================================================");

        console.log(`Employee Total Salary : ${CalAllSalary}`);
        console.log(`Salary Receiver By : ${this._AfterReceive}`);
    }
    
}

var empobj = new Salary (22,"Faisal Abbas","Karamat Hussain","42301-4102229-9",20,5)
empobj.Empfixsalary = 30000;
empobj.Empadvancesalary = 2000;
empobj.Emptravellingallowance = 5000;
empobj.Empbonusallowance = 1500;
empobj.Empbonuspermonth = 10000;
empobj.Emptexpermonth = 1000;
empobj.AfterReceive = "Shahzaib Hassan"

empobj.AcoountingModel()