import React from 'react';
import {mount} from 'enzyme';
import Footer from 'components/footer';

describe('footer component',()=>{
   it('render footer componet',()=>{
      const wrapper=mount(<Footer />);
      expect(wrapper.find('.footer').length).toBe(1);
   })
})

