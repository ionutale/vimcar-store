import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Toolbar from './Toolbar'
import Cart from '../Cart/Cart';

configure({adapter: new Adapter()})

describe('<Toolbar />', () => {
    const props = {
        imageSource: 'someimage.png', 
        alt: 'this is someimage',
        description: 'this is the description of the item',
    }
        
    const wrapper = shallow(<Toolbar {...props}/>)


    it('should have a container that have 2 children 1 img logo and 1 Cart', ()=> {
        expect(wrapper.children()).toHaveLength(2)
        expect(wrapper.childAt(0).type()).toBe('img')
        expect(wrapper.childAt(1).type()).toBe(Cart)
    })
    
})