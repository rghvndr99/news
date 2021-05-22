import React from 'react';
import { mount, shallow } from 'enzyme';
import Home from 'pages/home';
import { initContext, ContextProvider } from 'context/context';

describe('Home page', () => {

   it('render home page', () => {
    const context = initContext({});
    const wrapper = mount(
       <ContextProvider initialState={context.state} reducer={context.reducer}>
          <Home />
       </ContextProvider>

    );
      expect(wrapper.find('.page-wrapper').length).toBe(1);
   });
})