import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ImageCard from './ImageCard'


configure({adapter: new Adapter()})

describe('<ImageCard />', () => {
    const props = {
        imageSource: 'someimage.png', 
        alt: 'this is someimage',
        description: 'this is the description of the item',
    }
        
    const wrapper = shallow(<ImageCard {...props}/>)

    it('should have 1 paragraph that describe the item ', ()=> {
        expect(wrapper.find('p')).toHaveLength(1)
        expect(wrapper.find('p').text()).toBe('this is the description of the item')
    })

    it('should have 1 img tag', ()=> {
        expect(wrapper.find('img')).toHaveLength(1)
        expect(wrapper.find('img').prop('src')).toBe('someimage.png')
        expect(wrapper.find('img').prop('alt')).toBe('this is someimage')
    })

    it('should have a container that have 2 children div.overlay and an img', ()=> {
        expect(wrapper.childAt(0).children()).toHaveLength(2)
    })

    it('should have an h1 as an overlayText inside the overlay inside the container', ()=> {
        expect(wrapper.childAt(0).childAt(0).find('h1')).toHaveLength(1)
        expect(wrapper.childAt(0).childAt(0).find('h1').text()).toBe('Add to Cart')
    })


    
})