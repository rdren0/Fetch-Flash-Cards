import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setStorage = jest.spyOn(Storage.prototype, 'setItem');
const getStorage = jest.spyOn(Storage.prototype, 'getItem');

const testEasy =  {target: { innerText: 'easy' }} 
const testCompleted = [8,9]


const mockCards = [{
  "ID": 7,
  "Question": "What should always be the last function on a fetch call?",
  "Answer": ".catch()",
  "Difficulty": "Easy"
}, {
  "ID": 8,
  "Question": "What method should our fetch call always live in?",
  "Answer": "componentDidMount()",
  "Difficulty": "Easy",
  "status": true
}, {
  "ID": 9,
  "Question": "A ___ is a computer that hosts data so that one can remotely access this data.",
  "Answer": "Server",
  "Difficulty": "Easy"
}]


describe('App', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <App
      />
    )
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when loading data', () => {
    wrapper.setState({ loading: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should show all cards expected completed ones', () =>{
      wrapper.setState({ questions: mockCards });
      wrapper.setState({ completed: [8,9] });
      wrapper.find('#showAll').simulate('click');
      expect(wrapper.state("selection")).toEqual([{
        "ID": 7,
        "Question": "What should always be the last function on a fetch call?",
        "Answer": ".catch()",
        "Difficulty": "Easy"
      }])
  });

  it('show sort Cards by difficulty', () => {
    wrapper.setState({ questions: mockCards });
    wrapper.find('#medium').simulate('click', testEasy);
    expect(wrapper.state("selection")).toEqual([])
  });

  it('show only display completed Cards', () => {
    wrapper.setState({ questions: mockCards });
    wrapper.setState({ completed: testCompleted });
    wrapper.find('.completed-button').simulate('click', testEasy);
    expect(wrapper.state("selection")).toEqual([mockCards[1], mockCards[2]])
  });

  it('should add card to completed', () => {
    wrapper.setState({ completed: testCompleted });
    wrapper.instance().addCompleted(8, true);
    expect(wrapper.state("completed")).toEqual([8,9])

  });

  it('should add card to completed', () => {
    wrapper.instance().saveToStorage();
    expect(setStorage).toHaveBeenCalled();
  });

  it.skip('should fetch data', () =>{
    expect(componentDidMount).toHaveBeenCalled();
  })

})
