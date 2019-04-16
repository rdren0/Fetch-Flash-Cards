import Fetch from '../Components/Fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Fetch', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <Fetch/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});