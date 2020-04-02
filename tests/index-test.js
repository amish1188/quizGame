const React = require('react');
import {shallow} from 'enzyme';
const { mount } = require('enzyme');
const {QuizGame} = require("../src/QuizGame");
const {shuffle} = require('../src/QuizGame')

const a = [1,2,3,4,5];



function checkQuizzIsAvailable(driver) {

    const question = driver.find('.question');
    expect(question.length).toEqual(1);

    const answers = driver.find('.answer');
    expect(answers.length).toEqual(4);
}

test('Test rendered quiz', () => {
    const driver = mount(<QuizGame/>);
    checkQuizzIsAvailable(driver);
});

// test('Array length correct', () =>{
//     const wrapper = shallow(<QuizGame></QuizGame>);
//     expect(wrapper.instance().shuffle(a)).toBe(a.length);
    
// });