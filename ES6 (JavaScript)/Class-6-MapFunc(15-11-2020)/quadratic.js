//          Quadratic-Formula Through Map Function

console.log("=============================================");
console.log("===============Quadratic Formula=============");
console.log("=============================================");


var Values = [{a:1 ,b:2 ,c:1}]

console.log("\t Here a = 1");
console.log("\t Here b = 2");
console.log("\t Here c = 1");

console.log("=============================================");

var formula = Values.map((x)=> {

    var Sqrt = Math.sqrt((x.b)*(x.b)-4*(x.a)*(x.c))
    console.log("The Srqt Answer is : ",Sqrt);

    console.log("=============================================");

    var Uper = -(x.b)*(x.b)
    console.log("The Uper Answer is : ",Uper);

    console.log("=============================================");

    var lower = 2*(x.a)
    console.log("The Bottom Answer is : ",lower);

    console.log("=============================================");

    // With the Sign of Minus(-)
    var Quadratic_Formula = (Uper-Sqrt)/(lower)
    console.log("The Final Answer is : ",Quadratic_Formula);

    // With the Sign Of Plus(+)
    var QuadraticFormula = (Uper+Sqrt)/(lower)
    console.log("The Final Answer is : ",QuadraticFormula);
})