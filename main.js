
console.log("Write a single function that outputs the “largest” phone number in an input array (if multiple numbers are equally large, return the last one). Assume that the phone numbers are strings of 10 digits separated by dashes.");

// var array = ['123-456-7777', '963-481-7945', '111-222-3333'];
// var largest = 0;
// // Write your code below!
// for (var i = 0; i < array.length; i++){
//   if (array[i] > largest) {
//     largest = array[i];
// }
// }
// console.log();

////// OTHER ////

// Array.max = function( array ){
//     return Math.max.apply( Math, array );
// };
// OTHER
// var array = [267, 306, 108];
// var largest = Math.max.apply(Math, array);


//////// New Test///
console.log("preChallenge1");
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

// function sumOfDigits(){
//
// }

u = ['123-456-7777', '963-481-7945', '111-222-3333']
k = ['555-555-5555','111-111-1111','555-555-5456','222-121-2121']
q = ['123-456-7899']
console.log(preChallenge(u));
console.log(preChallenge(k));
console.log(preChallenge(q));
///// New

// var arr1=['123-456-7777', '963-481-7945', '111-222-3333'];
// var arr2=[];
// var min=arr1[0];
// var pos;
// max=arr1[0];
// for (i=0; i<arr1.length; i++)
// {
//         if (max<arr1[i]) max=arr1[i];
// }
//
// for (var i=0;i<arr1.length;i++)
// {
//         for (var j=0;j<arr1.length;j++)
//         {
//                 if (arr1[j]!="x")
//                 {
//                         if (min>arr1[j])
//                         {
//                                 min=arr1[j];
//                                 pos=j;
//                         }
//                 }
//         }
//         arr2[i]=min;
//         arr1[pos]="x";
//         min=max;
// }
// console.log(arr2);
///////////
console.log("Attempt 2");
var num = ['123-456-7777', '963-481-7945', '111-222-3333'];
var max = -Infinity;
var maxInteger = 0;
num.forEach(function (el, i) {
  var n = el.split('').reduce(function (a, b) {
    return parseInt(a,10) + parseInt(b,10);
  });
  if (n > max) {
      max = i;
      maxInteger = n;
  }
})
console.log(max);
console.log(num[maxInteger]);

console.log("Attempt #3");
var Math1 = {
    min: function(values) {
        if(values.length == 0) {
            return NaN;
        } else if(values.length == 1) {
            var val = values.pop();
            if ( typeof val == "number" ) {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return Math.min(val, this.min(values))
        }
    },
    max: function(values) {
        if(values.length == 0) {
            return NaN;
        } else if(values.length == 1) {
            var val = values.pop();
            if ( typeof val == "number" ) {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return Math.min(val, this.max(values))
        }
    }
}

console.log(Math1.min([123-456-7777, 963-481-7945, 111-222-3333]));
console.log(Math1.max([123-456-7777, 963-481-7945, 111-222-3333]));

console.log("shorthand");
console.log(Math.max.apply(Math, [123-456-7777, 963-481-7945, 111-222-3333]));
