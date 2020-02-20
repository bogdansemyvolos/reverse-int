module.exports = function reverse (n) {
var result = '';
var array = n.toString().split('');
  for (var i = array.length - 1; i >= 0; i--) {
        result = result + array[i];
  }
  console.log(result);
  return parseInt(result);
}
