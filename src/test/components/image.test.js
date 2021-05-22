import React from 'react';
import {mount,shallow} from 'enzyme';
import Image from 'components/image';

describe('Image component',()=>{
   it('render Image componet',()=>{
      const wrapper=shallow(<Image />);
      expect(wrapper.find('img').length).toBe(1);
   })
})

