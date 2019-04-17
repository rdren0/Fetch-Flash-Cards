import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Components/Card';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let mockCard = {
  "ID": 6,
  "Question": "What function directly follows our fetch URL line?",
  "Answer": ".then()",
  "Difficulty": "Easy"
}

const mockCompletedFn = jest.fn()
const testEvent =  {target: { value: 'test' }} 

describe('Card', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Card
        ID={mockCard.ID}
        Question={mockCard.Question}
        Answer={mockCard.Answer}
        Difficulty = {mockCard.Difficulty}
        completed = {false}
        addCompleted = {mockCompletedFn}
        status = {false}

      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper defualt state', () => {
    expect(wrapper.state('answer')).toEqual(null);
    expect(wrapper.state('revealAnswer')).toEqual(false);  
  });


  it('should match the snapshot with all data passed in correctly', () => {
    wrapper.setState({ revealAnswer: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should only show the guess side on uncompleted cards', () =>{
    wrapper = shallow(
        <Card  status={true} />
      )
    expect(wrapper).toMatchSnapshot();
  });

  it('should record a response', () => {
     wrapper.find('input').simulate('change', testEvent)
    expect(wrapper.state("answer")).toEqual("test")
  });

  it('should check if the answer is correct with correct answer', () =>{
    wrapper.setState({ answer: "test" });
    wrapper.find('#submit').simulate('click');
    wrapper.instance().checkAnswer(testEvent)
    expect(wrapper.state("revealAnswer")).toEqual(true);
  });
  it('should check if the answer is correct with wrong answer', () =>{
    wrapper.setState({ answer: ".error()" });
    wrapper.find('#submit').simulate('click');
    wrapper.instance().checkAnswer(".error()")
    expect(wrapper.state("revealAnswer")).toEqual(false);
  });


});


