function sum(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3
}

const resta = (num1 = 0, num2 = 0) => {
    return num1 - num2
}

const multi = (num1, num2) => {
    return num1 * num2
}

function isUpperCase(sentence) {

    return (sentence == sentence.toUpperCase());

}

module.exports = {
    sum,
    resta,
    multi,
    isUpperCase
}

