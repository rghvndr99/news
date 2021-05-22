import React from 'react';
import { mount, shallow } from 'enzyme';
import Tile from 'components/tile';

describe('Tile component', () => {
   const list= [
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
      "title": "How Significant Is The Electric Ford F-150 Lightning?",
      "description": "Forget your premium Teslas. To win in America, electric vehicles need to be good, wholesome, affordable pickups. The Ford F-150 Lightning might be just such a truck.",
      "url": "https://www.forbes.com/sites/jamesmorris/2021/05/22/how-significant-is-the-electric-ford-f-150-lightning/",
      "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60a7de1f3439ca4eb1e70fef%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3000%26cropY1%3D312%26cropY2%3D2000",
      "publishedAt": "2021-05-22T09:00:00Z",
      "content": "Tesla may be the company that took electric cars into the mainstream as desirable objects. But it has not won the heart of America over to electrification just yet. That is because your average Ameri… [+5530 chars]"
      }];

   it('render Tile componet', () => {
      const fn=jest.spyOn(global.window,'open')
      const wrapper = mount(<Tile {...list[0]} />);
      wrapper.simulate('click');
      expect(wrapper.find('.tile-wrap').length).toBe(1);
      expect(fn).toHaveBeenCalled();
   });
})

