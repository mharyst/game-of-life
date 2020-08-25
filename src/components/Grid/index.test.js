import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {createInitialGrid} from '../../utils/index'
import Grid from './index'

Enzyme.configure({adapter: new Adapter()})

jest.mock('../../utils/index', () => ({
  createInitialGrid: jest.fn(() => [[true, false]]),
}))

describe('Grid component', () => {

  it('should render grid inside wrapper', () => {
    const wrapper = shallow(<Grid />)

    expect(wrapper.find('.wrapper').children().first().hasClass('grid')).toBe(true)
  })

  it('should correctly render all rows with cells inside them', () => {
    createInitialGrid.mockReturnValue([[true, false], [false, false]])
    const wrapper = shallow(<Grid />)

    expect(wrapper.find('.row').length).toBe(2)
    expect(wrapper.find('.cell').length).toBe(4)
    expect(wrapper.find('.alive').length).toBe(1)
  })
})
