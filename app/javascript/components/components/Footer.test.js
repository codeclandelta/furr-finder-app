import React from 'react'
import Footer from './Footer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('When Footer renders', () => {
  it('displays 2 NavLink', () => {
    const footer = shallow(<Footer />)
    const footerNav = footer.find('NavLink')
    expect(footerNav.length).toEqual(2)
  })
})
