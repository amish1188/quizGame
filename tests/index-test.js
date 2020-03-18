const React = require('react');
const { mount } = require('enzyme');
const {indexo} = require("../src/index");



function checkQuizzIsAvailable(driver) {

    const question = driver.find('.question');
    expect(question.length).toEqual(1);

    const answers = driver.find('.question');
    expect(answers.length).toEqual(3);
}

test('Test rendered quiz', () => {
    const driver = mount(<QuestionContainer/>);
    checkQuizzIsAvailable(driver);
}) 