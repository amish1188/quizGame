const React = require('react');
const { mount } = require('enzyme');
const {App} = require("../src/index");



function checkQuizzIsAvailable(driver) {

    const question = driver.find('.question');
    expect(question.length).toEqual(1);

    const answers = driver.find('.question');
    expect(answers.length).toEqual(3);
}

test('Test rendered quiz', () => {
    const driver = mount(<App/>);
    checkQuizzIsAvailable(driver);
}) 