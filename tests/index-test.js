const index = require("../src/index.js");

const numbers = [1,2,3];

test('Check if random shuffles all questions', ()=> {
    expect(index.randomizingQuiz(numbers)).toEqual(numbers.length)
})
