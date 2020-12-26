//            ATM Machine Through ReadLine

const { S_IFMT } = require("constants");
const { futimes } = require("fs");
var readline = require (`readline`);
var takeInput = readline.createInterface(process.stdin , process.stdout)

var Available_Balane = 100000;

function mainmenu(){

    console.log("==========================================");
    console.log("=============ATM CASH MACHINE=============");
    console.log("==========================================");
    
    console.log("\t 1.Cash Withdrawl \n");
    console.log("\t 2.Balance Enquiry \n");
    console.log("\t 3.Fast Cash \n");
    console.log("\t 4.Online Banking \n");
    console.log("\t 5.Exit");

    console.log("==========================================");
    console.log("==========================================");


    takeInput.question("Which Operation DO you want to Perform : ",function (a) {
        if (parseInt(a)==1)
        {
            CashWithdrawl();
        }

        else if (parseInt(a)==2)
        {
            Balane_Enquiry();
        }

        else if (parseInt(a)==3)
        {
            Fast_Cash();
        }

        else if (parseInt(a)==4)
        {
            Online_Banking();
        }

        else if (parseInt(a)==5)
        {
           takeInput.close();
        }

        else
        {
            mainmenu();
        }
    })
    
}

function CashWithdrawl() {

    console.log("==============================================");
    console.log("================Cash Withdrawl================");
    console.log("==============================================");

    console.log(`Your 'Total Balance' is ${Available_Balane}`);
    console.log("===============================================");

    takeInput.question("Please Enter Amount Of Cash Withdrawl : ",function(x){
        var amounttrans = parseInt(x)
        Balance = Available_Balane-amounttrans;
        console.log("Transaction Amount is : "+amounttrans);
        console.log("Your Remaining Balance is : "+Balance);
        recall();
    })
}

function Balane_Enquiry()  {

    console.log("==============================================");
    console.log("================Balance Enquiry===============");
    console.log("==============================================");

    console.log("Available Balance In Your Account is : "+Available_Balane);
    recall();
}

function Fast_Cash() {

    console.log("==============================================");
    console.log("==================Fast Cash===================");
    console.log("==============================================");

    console.log("*\t 1. 10000\t\t2. 5000");
    console.log("*\t 3. 20000\t\t4. 2000");
    console.log("*\t 5. 500 \t\t6. 1000"); 

    console.log("==============================================");

    takeInput.question("Please Enter Function  : ",(f) => {

        if (parseInt(f)==1)
        {
            console.log("You Have Selected :  10000");
            var Remaining = Available_Balane-10000;
            console.log("Available Balance In Your Account is : "+Remaining);
        }
        else if (parseInt(f)==2)
        {
            console.log("You Have Selected :  5000");
            Remaining = Available_Balane-5000;
            console.log("Available Balance In Your Account is : "+Remaining);
        }
        else if (parseInt(f)==3)
        {
            console.log("You Have Selected :  20000");
            Remaining = Available_Balane-20000;
            console.log("Available Balance In Your Account is : "+Remaining);
        }
        else if (parseInt(f)==4)
        {
            console.log("You Have Selected :  2000");
            Remaining = Available_Balane-2000;
            console.log("Available Balance In Your Account is : "+Remaining);
        }
        else if (parseInt(f)==5)
        {
            console.log("You Have Selected :  500");
            Remaining = Available_Balane-500;
            console.log("Available Balance In Your Account is : "+Remaining);
        }
        else if (parseInt(f)==6)
        {
            console.log("You Have Selected :  1000");
            Remaining = Available_Balane-1000;
            console.log("Available Balance In Your Account is : "+Remaining);
        }
        else
        {
            mainmenu();
        }
    })
}

function Online_Banking() {

    console.log("==============================================");
    console.log("==================Online Banking==============");
    console.log("==============================================");

    takeInput.question("Enter Account Number : ", (x)=>{
        takeInput.question("Enter Amount To Transfer : ", (y)=>{

            var Account_No = parseInt(x);
            var _Amount = parseInt(y);

            Balance = Available_Balane-_Amount;
            console.log("Account Number Is :"+Account_No);
            console.log("Your Transfer Amount is :"+_Amount);
            console.log("Available Balance In Your Account is : "+Balance);
            recall();
        })
    })
}

function recall()
{
    takeInput.question ("Do you want to Continue ||yes ||no : ", function(z){
        if(z=='yes')
        {
            mainmenu();
        }
        else
        {
            takeInput.close();
        }
    })
}

mainmenu()