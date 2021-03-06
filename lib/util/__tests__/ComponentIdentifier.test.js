import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentIdentifier, { pick } from '../ComponentIdentifier'

describe('ComponentIdentifier', () => {
  class Trigger extends ComponentIdentifier {
    static displayName = 'Trigger'
  }

  class App extends Component {
    static propTypes = {
      children: PropTypes.node // eslint-disable-line react/require-default-props
    }

    render () {
      const trigger = pick(Trigger, this.props.children)

      return (
        <div>
          <h2>Trigger</h2>
          {trigger}
        </div>
      )
    }
  }

  const testbed = new Testbed(<App />)

  it('should render only child', () => {
    const subject = testbed.render({
      children: (
        <Trigger>
          <button>Click Me</button>
        </Trigger>
      )
    })
    const trigger = subject.find(Trigger).find('button')

    expect(trigger.text()).to.equal('Click Me')
  })

  it('should not error when no children provided', () => {
    expect(() => {
      testbed.render({
        children: (
          <Trigger />
        )
      })
    }).to.not.throw(Error)
  })

  it('should pass props', () => {
    const onClick = testbed.stub()
    const subject = testbed.render({
      children: (
        <Trigger onClick={onClick}>
          <button>Click Me</button>
        </Trigger>
      )
    })
    const button = subject.find('button').unwrap()
    button.click()
    expect(onClick).to.have.been.called
  })
})
