var mirror = function(input) {
    var kata = input.split('')
    var kilab = kata.reverse()
    return input + '' + kilab.join('');
}
var input = 'avg'
console.log('input: mirror(' + input + ')')
console.log('output: ' + mirror('avg'))