import Container from '../Components/Container';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let mockData = [{
  "ID": 1,
  "Question": "What status code indicates that there has been an error on the client side?",
  "Answer": 400,
  "Difficulty": "Easy"
}, {
  "ID": 2,
  "Question": "What status code indicates that there has been an error on the server side?",
  "Answer": 500,
  "Difficulty": "Easy"
}, {
  "ID": 3,
  "Question": "What status code indicates the fetch was successful but the data may have moved?",
  "Answer": 300,
  "Difficulty": "Easy"
}]

let mockData2 =[]

let mockComplete = [2,3]

describe('Container', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Container
      data = {mockData}
      completed = {mockComplete}/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a placeholder if data is empty', () => {
     <Container
      data = {mockData2}/>
  });

  it('should render a Fetch Component if all cards completed', () => {
     <Container
      completed = {30}/>
  });
});