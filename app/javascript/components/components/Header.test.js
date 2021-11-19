import React from 'react'
import Header from './Header'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('When Header renders', () => {
  it('displays 2 NavLink', () => {
    const header = shallow(<Header />)
    const headerNav = header.find('NavLink')
    expect(headerNav.length).toEqual(2)
  })
})
