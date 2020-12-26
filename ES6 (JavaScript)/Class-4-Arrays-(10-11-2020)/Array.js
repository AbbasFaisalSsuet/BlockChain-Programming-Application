//         Cv Through Slice Function

console.log("===========================");
console.log("============CV=============");
console.log("===========================");

var Cv_Tilttle = ["Name :","fname :","Nic :","Email :","Dob :","Qualification :","Experience :"]
var Cv_Data = ["Faisal Abbas","Karamat Hussain","42301-4102229-9","faisalabbasjaffri05@gmail.com"
,"09-05-2000","BSCS Semester III","06 Months Data Entry Experience"]

function PersonalCv(){
    
    for(i=0;i<Cv_Tilttle.length;i++)
    {
        console.log(Cv_Tilttle.slice(i,i+1) + Cv_Data.slice(i,i+1));
    }
}
 PersonalCv()


//         Sorted Array DAta

console.log("===========================");
console.log("============DATA===========");
console.log("===========================");

var num = ["pc1","pc8","pc10","pc0","pc2","pc5","pc4"]
var sorted = num.sort();
console.log("Sequenced Data is :" + sorted);


//        Splice Array DAta

console.log("===========================");
console.log("============DATA===========");
console.log("===========================");

var array1 = ["Faisal","Abbas","99","100","101","102"]
var removed = array1.splice(2,0, "JAFFRI");

console.log("After Adding Values :" + array1);

var After_rem = array1.splice(3,1);

console.log("After Removing Values :" + After_rem);
console.log("After Adding Values :" + array1);



//                  MultiDimensional Array

var stdData = {
    stdName : ["Faisal","Hassan","AbuBak","Hammas","Hassoo","Yawwar","Shafii"],
    StdRollno : [1,3,5,9,20,25,8],
    stdDepartement : ["Computer Science","Softwrare Engineering","Graphics Designing",
                      "Web Development","Hotel Managment","Mathematics","BlockChain Programming"]
}

var StdSystem = new Array (7)
var Update = function() 
{
    console.log("\t===================================");
    console.log("\t==========Stundent System==========");
    console.log("\t===================================");

    for (i=0;i<7;i++)
    {
        StdSystem[i]= [stdData.stdName[i],stdData.StdRollno[i],stdData.stdDepartement[i]]
    }
    for (i=0;i<7;i++)
    {
        var Array1 = new Array(3);
        for (j=0;j<StdSystem[i].length;j++)
        {
            Array1[j] = StdSystem[i][j]
        }
        console.log(Array1[0]+"  "+Array1[1]+"  "+Array1[2]);
    }
}
Update()