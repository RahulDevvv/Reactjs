/*function fun1(x,y,...z){
    console.log({x,y,z})
}
fun1(10,20,30,40,50,60)
*/

/*function sum(...theArgs){
    let total=0;
    for(const arg of theArgs){
        total +=arg;
    }
    return total;
}
console.log(sum(1,2,3))
*/

function myFun(a,b,...manyMoreArgs){
    console.log("a",a);
    onsole.log("b",b);
    onsole.log("manyMoreArgs",manyMoreArgs);
}
myFun("one","two","three","four","five","six");