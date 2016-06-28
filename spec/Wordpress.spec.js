import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Wordpress } from '../src'
import { default as Container } from '../src/Container'

const renderer = TestUtils.createRenderer()

describe('Wordpress', () => {
  let tree

  beforeEach(() => {
    renderer.render(<Wordpress />)
    tree = renderer.getRenderOutput()
  })

  it('renders a container', () => {
    expect(tree.type).toEqual(Container)
  })
})