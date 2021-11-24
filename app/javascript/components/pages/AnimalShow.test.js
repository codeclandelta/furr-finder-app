import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AnimalShow from './AnimalShow'



Enzyme.configure({adapter: new Adapter()})

describe('when Show renders', () => {
    it('displays a Heading ', () => {
        const showHeader = shallow(<AnimalShow />).find("h3")
        expect(showHeader.text()).toEqual("Animal Information")
    })
   })