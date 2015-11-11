
console.log("Write a single function that outputs the “largest” phone number in an input array (if multiple numbers are equally large, return the last one). Assume that the phone numbers are strings of 10 digits separated by dashes.");

// var array = ['123-456-7777', '963-481-7945', '111-222-3333'];
// var largest = 0;
// // Write your code below!
// for (var i = 0; i < array.length; i++){
//   if (array[i] > largest) {
//     largest = array[i];
// }
// }
// console.log(largest);

////// OTHER ////

Array.max = function( array ){
    return Math.max.apply( Math, array );
};


//////// New Test///

function preChallenge(x) {
    var count = 0;
    var total = [];
    for (var i = 0 ; i < x.length; i++){
        var t = x[i];
    for(var p = 0; p < t.length ; p++) {
        if(t[p] != '-'){
         count += p;
        }
    }
total.push(count);
}

for(n = 0; n < total.length ; n ++) {
   var s = 0;
   if(total[n] >= s ) {
       s = n;
   }

}
return x[s];
}

function sumOfDigits(){

}

u = [123-456-7777, 963-481-7945, 111-222-3333]
console.log(preChallenge(u));
