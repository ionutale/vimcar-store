import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cart from './Cart'

configure({adapter: new Adapter()})

describe('<Cart />', () => {
    const wrapper = shallow(<Cart />)

    
    it('should have 2 children', ()=> {
        expect(wrapper.children()).toHaveLength(2)
    })
    
    it('should have 1 img tag', ()=> {
        expect(wrapper.find('img')).toHaveLength(1)
    })
    describe('badge' , () => {

        it('should have 1 div Badge', ()=> {
            expect(wrapper.childAt(0)).toHaveLength(1)
            expect(wrapper.childAt(0).type()).toBe('div')
            
        })

        it('should have text 0', ()=>{
            expect(wrapper.childAt(0).text()).toBe('0')
        })
        
        it('should have text 10', ()=> {
            wrapper.setProps({itemsInCart: 10})
            expect(wrapper.childAt(0).text()).toBe('10')
        })
    })
})