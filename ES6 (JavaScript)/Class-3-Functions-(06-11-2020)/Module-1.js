//           School Managment System This.Lambda Function


function STudentData (Name,fname,classname,lastclass,lastpassingmarks,Rollno) {
    
    this.Name = Name;
    this.fname = fname;
    this.classname = classname;
    this.lastclass = lastclass;
    this.lastpassingmarks = lastpassingmarks;
    this.Rollno = Rollno;

    this.usingarrow = function (){
        setTimeout(()=>{
            console.log("\t ============================");
            console.log("\t School Managment System");
            console.log("\t ============================");
            console.log("\t Rollno :" + this.Rollno + "\n" + "\t Name :" + this.Name + "\n" + "\t fname :" + this.fname + "\n" +
            "\t classname :" + this.classname + "\n" + "\t lastclass :"+this.lastclass + "\n" + "\t lastpassingmarks :" + this.lastpassingmarks);
        },2000);
    }
}

//       console.log("========================================");


function Feesrecord (Admissionfees,Monthlyfees,Extracirculumfees,Gamefees) {

    this.Asmissionfees = Admissionfees;
    this.Monthlyfees = Monthlyfees;
    this.Extracirculumfees = Extracirculumfees;
    this.Gamefees = Gamefees;

    this.usingarrow = function (){
        setTimeout(()=>{
            console.log("\t ============================");
            console.log("\t STudent Fees Section");
            console.log("\t ============================");
            console.log("\t Admissionfee :" + this.Asmissionfees + "\n" + "\t Monthlyfees :" + this.Monthlyfees + "\n" + "\t Extracirculumfees :" + this.Extracirculumfees + "\n" +
            "\t Gamefees :" + this.Gamefees);
        },3000);
    }
}

//       console.log("========================================");

function Studentmarks (English,Maths,Urdu,Islamiat,Pst){

    this.English = English;
    this.Maths = Maths;
    this.Urdu = Urdu;
    this.Islamiat = Islamiat;
    this.Pst = Pst;

    const Status = (x) =>
    
        x>40? "Pass":"Fail"

    this.usingarrow = function (){
        setTimeout(()=>{
            console.log("\t ============================");
            console.log("\t Student Marks Sheet");
            console.log("\t ============================");
            console.log("\t English Marks :" + Status(this.English) + "\n" + "\t Maths Marks :" + Status(this.Maths) + "\n" + "\t Urdu Marks :" + Status(this.Urdu) + "\n" +
            "\t Islamiat Marks :" + Status(this.Islamiat) + "\n" + "\t Pst Marks :" + Status(this.Pst));
        },4000);
    }
}

const objStd = new STudentData ("Faisal Abbas","Karamat Hussain","BSCS","Intermediate","1100","16252029");
objStd.usingarrow();

const objFees = new Feesrecord ("2000","15000","10000","5000");
objFees.usingarrow();

const objMarks = new Studentmarks ('75','70','85','90','35')
objMarks.usingarrow();

