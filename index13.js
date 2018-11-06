
console.log('START FOR')
for(var i = 0; i < 10; i =i + 3 ) {
  console.log('i = ', i);
  if(i === 3) {
    console.log('CONTINUE')
    continue;
  }
  
  if(i === 6) {
    console.log('BREAK')
    break;
  } 
}

console.log('START WHILE DO')
var j = 0;

while(j < 10) {
  console.log('j =', j);
  j = j + 3;
}
console.log('START DO WHILE')
var k = 0;
do {
  console.log('k =', k);
  k = k + 3;
} while(k < 10)

var ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('START FOR-IN')
for(var l in ar) {
  console.log('l =', l);
}

var obj = {
  'key1': 'CHIDA1',
  'key2': 'CHIDA2',
  'key3': 'CHIDA3',
  'key4': 'CHIDA4',
  'key5': 'CHIDA5',
}

console.log('START FOR-IN OBJECT')
for (var m in obj) {
  console.log('m =', obj[m]);
}

var aue = ['s1', 's2', 's3'];
console.log('START FOR-IN')
for(var p in aue) {
  console.log('p =', p);
}

var x = {
  outerObject: {

  }
}





