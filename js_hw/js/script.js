var x = prompt('Укажите число');
var n = prompt('Укажите степень');

console.log( x, n );
console.log(level(x, n));

function level(a, b) {
  var result = 1;
  for (var i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

// SECOND PART

var arr = [];
arr.length = 5;

for (i = 0; i < arr.length; i++) {
  arr[i] = prompt('Enter name');
}

console.log(arr);
var ownName = prompt('Enter your name');

function inArray(ownName, arr) {
  for (var i = 0; i < arr.length; i++) {
    if ( ownName == arr[i] ) {
      return alert(ownName + ', вы успешно вошли');
    }
  }
  return alert('Mistake!');
}

inArray(ownName, arr);
