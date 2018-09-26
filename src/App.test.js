import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({adapter: new Adapter()})

describe('<App />', () => {
  const wrapper = shallow(<App />)

  it('should not be null or undefined', () => {
    expect(wrapper).not.toBe(null)
    expect(wrapper).not.toBe(undefined)
  })

  it('should have ImageCard length === state.items', () => {
    expect(wrapper.find('ImageCard')).toHaveLength(wrapper.state().items.length)
  })

  it('should have 1 toolbar', () => {
    expect(wrapper.find('Toolbar')).toHaveLength(1)
  })

  it('should have 1 section', () => {
    expect(wrapper.find('section')).toHaveLength(1)
  })

  it('should have state itemsInCart = 0', ()=> {
    expect(wrapper.state().itemsInCart).toBe(0)
  })

  it('should increse itemsInCart by 1 for every click', ()=> {
    wrapper.find('ImageCard').at(0).simulate('click')
    expect(wrapper.state().itemsInCart).toBe(1)
  })

}) 