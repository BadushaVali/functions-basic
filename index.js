// in below examples we repeatedly doing multiplication code

var a = 5 ;
var b = 2 ;
var c = 2 ;
var multiply = a*b*c;
console.log(multiply);

var x = 15;
var y = 5;
var division = x/y;
console.log(division);

// function is a reusable code.
// can called anywhere in our program.
// this avoids the writing or defining the same code repeatedly.

// syntax of funciton

/*function functionname(parameter-list) {
    statements
}*/

// example 

function print(name){
    console.log(name + ' congratulations')
}

// calling a function with argument 
print('baadshah')
 
//Note : if we define only function then nothing will execute 
// Have to invoke or call the function then it will execute 

// example-2
function multiplication(a,b){
    var multiply = a*b;
    console.log('Answer is '+ multiply);
}
multiplication(5,2); // here they are 2 arguments
multiplication(10,2);
multiplication(5,6);

//example - 3
function add(a,b,c){
    var sum = a+b+c;
    console.log('sum is ' + sum);
}
add(5,3,2);  // here they are 3 arguments
add(5,3,2); 
add(5,3,2); 

//return statement 

function add1(p,q,r){
    var sum1 = p+q+r;
    return sum1;
  // IMP Note: after this 'return' what ever u write it will not execute , return means here break.  
}
var response = add1(2,2,2);
console.log(response + ' is the answer');
var response1 = add1(3,3,3);
console.log(response1 + ' is the answer buddy');

// function expression 

//example
var add3 = function(m,n,o){
    var sum2 = m+n+o;
    return sum2;
}

var res3 = add3(4,2,1);
console.log(res3);
