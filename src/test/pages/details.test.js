import React from 'react';
import { mount, shallow } from 'enzyme';
import Detail from 'pages/detail';

describe('Detail page', () => {

   it('render Detail page', () => {
      const wrapper = mount(<Detail />);
      expect(wrapper.find('p').length).toBe(1);
   });
})

