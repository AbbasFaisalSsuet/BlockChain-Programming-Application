//                             TimeStamps

var it = new Date();
console.log(it);

var it = new Date();
console.log(`${it.getFullYear()} / ${it.getMonth()} / ${it.getDate()} ( ${it.getHours()} : ${it.getMinutes()} : ${
    it.getSeconds()} : ${it.getMilliseconds()} )`);

it.setHours(20);
console.log(it.getHours());

var it = new Date();
it.setHours(8);
it.setMinutes(46);
console.log(`${it.getHours()} : ${it.getMinutes()}`);

var it = new Date();
console.log(it.getMonth());