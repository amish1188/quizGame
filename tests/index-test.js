const React = require('react');
const { mount } = require('enzyme');
const {QuizGame} = require("../src/QuizGame");



function checkQuizzIsAvailable(driver) {

    const question = driver.find('.question');
    expect(question.length).toEqual(1);

    const answers = driver.find('.answer');
    expect(answers.length).toEqual(4);
}

test('Test rendered quiz', () => {
    const driver = mount(<QuizGame/>);
    checkQuizzIsAvailable(driver);
}) 