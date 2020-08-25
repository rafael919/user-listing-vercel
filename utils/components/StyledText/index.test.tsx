import React from 'react';
import { shallow } from 'enzyme';
import StyledText from './index';

describe('StyledText', () => {
  it('Should render styled component', () => {
    let wrapper = shallow(<StyledText />);
    expect(wrapper).toMatchSnapshot();
  });
});
