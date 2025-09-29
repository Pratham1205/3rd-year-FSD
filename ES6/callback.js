function sum(a,b) {
    console.log(a+b);
}
function cal(a,b, callback) {         // cal is use to call another function
    callback(a,b);
}
cal(10,20, sum);


