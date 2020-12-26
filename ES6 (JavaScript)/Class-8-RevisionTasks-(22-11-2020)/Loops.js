console.log("==============================================");
console.log("=============Right Angle Traingle=============");
console.log("==============================================");

for(var i=0; i<=5; i++)
{
    console.log("*".repeat(i));
}

console.log("==============================================");
console.log("=============Left Angle Traingle=============");
console.log("==============================================");
 
for (var i=1; i<=5; i++)
{
    var str = " ".repeat(5-i);
    var str1 = "*".repeat(i);
    console.log(str+str1);
}

console.log("==============================================");
console.log("====================Diamond===================");
console.log("==============================================");

for (var i=1; i<5; i++)
{
    var str = " ".repeat(5-i);
    var str1 = "*".repeat(i*2-1)
    console.log(str+str1+str);
}
for (var i=5; i>0; i--)
{
    var str = " ".repeat(5-i);
    var str1 = "*".repeat(i*2-1)
    console.log(str+str1+str);
}