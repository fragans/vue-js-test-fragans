var grade = function(input) {
    var day = "";
    input = 100;
    if (input > 90) {
        day = "A"

    } else if (input >= 80 && input >= 89) {
        day = "B"
    } else if (input >= 70 && input >= 79) {
        day = "C"
    } else if (input >= 60 && input >= 69) {
        day = "D"
    } else if (input <= 59) {
        day = "E"

    }
    return day
}
console.log('input: grade(60)')
console.log('output: ' + grade(60))