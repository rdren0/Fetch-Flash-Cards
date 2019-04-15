import Header from '../Components/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Header', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Header/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});