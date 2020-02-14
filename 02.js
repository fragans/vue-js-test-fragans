var reverse = function(input) {
    var kata = input.split(' ')
    var kilab = kata.reverse()
    return kilab.join(' ');
}
var input = 'saya ingin makan nasi goreng';
console.log('input: reverse(' + input + ')');
console.log('output: ' + reverse('saya ingin makan nasi goreng'))