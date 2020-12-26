//            Calculator Through ReadLine

var readline = require (`readline`);
var takeInput = readline.createInterface(process.stdin , process.stdout)

function mainmenu(){

    console.log("====================================");
    console.log("=============CALCULATOR=============");
    console.log("====================================");
    
    console.log("\t What Function do you want to perform ??" + "\n");
    console.log("\t 1.Addition \n");
    console.log("\t 2.Subtraction \n");
    console.log("\t 3.Multiplication \n");
    console.log("\t 4.Division");
    
   
    takeInput.question ("Select Operation : ", function(a){
    
    if (parseInt(a)==1)
    {
        takeInput.question ("Enter Your 1st Value : ", function(x){
            takeInput.question ("Enter Your 2nd Value : ", function(y){
                var add = parseInt(x) + parseInt(y);
                console.log("The Addition is :", add);
                recall()
            })
        }) 
    }
    
    else if (parseInt(a)==2)
    {
        takeInput.question ("Enter Your 1st Value : ", function(x){
            takeInput.question ("Enter Your 2nd Value : ", function(y){
                var Sub = parseInt(x) - parseInt(y);
                console.log("The Subtraction is :", Sub);
                recall()
            })
        })
    }
    
    else if (parseInt(a)==3)
    {
        takeInput.question ("Enter Your 1st Value : ", function(x){
            takeInput.question ("Enter Your 2nd Value : ", function(y){
                var Mult = parseInt(x) * parseInt(y);
                console.log("The Multiplication is :", Mult);
                recall()
            })
        })
    }
    
    else if (parseInt(a)==4)
    {
        takeInput.question ("Enter Your 1st Value : ", function(x){
            takeInput.question ("Enter Your 2nd Value : ", function(y){
                var Div = parseInt(x) / parseInt(y);
                console.log("The Division is :", Div);
                recall()
            })
        })
    }
    
    else {
        takeInput.close();
    }
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