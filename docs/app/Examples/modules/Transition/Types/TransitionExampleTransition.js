import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleTransition extends Component {
  state = { visible: true }

  handleVisibility = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        <Transition
          animation='scale'
          duration={1500}
          into={visible}
        >
          <Image size='small' src='http://semantic-ui.com/images/leaves/1.png' />
        </Transition>
        <Divider hidden />
        <Button
          content={visible ? 'Hide' : 'Show'}
          onClick={this.handleVisibility}
          type='button'
        />
      </div>
    )
  }
}