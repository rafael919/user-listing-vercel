import React from 'react';
import { shallow } from 'enzyme';
import ContentWrapper from './index';

describe('ContentWrapper', () => {
  it('Should render styled component', () => {
    let wrapper = shallow(<ContentWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
