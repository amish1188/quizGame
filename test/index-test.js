const index = require("../src/index");

const numbers = [1,2,3];

test('Check if random shuffles all questions', ()=> {
    expect(index.randomizingQuiz()).toEqual(numbers.length)
})
