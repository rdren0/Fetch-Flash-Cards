import PlaceHolder from '../Components/PlaceHolder';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('PlaceHolder', () => {
  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallow(
      <PlaceHolder/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});