var duplicateRemover = function(city) {

    const dis = city.filter((v, i, a) => a.indexOf(v) === i);
    return dis.join(', ')


}
var input = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];
console.log('Input: duplicateRemover(city)')
console.log('output: ' + duplicateRemover(input))