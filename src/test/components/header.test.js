import React from 'react';
import {mount,shallow} from 'enzyme';
import Header from 'components/header';

describe('header component',()=>{
   it('render header componet',()=>{
      const wrapper=shallow(<Header />);
      expect(wrapper.find('.headerNav').length).toBe(1);
   })
})

