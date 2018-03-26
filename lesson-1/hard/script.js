var num = '33721';
var len = num.length;
var result = 1;

for ( var i = 0; i < len; i++ )
  result = result * num.charAt(i);
  
var power = Math.pow(result, 3);

console.log(result);
document.write(power);