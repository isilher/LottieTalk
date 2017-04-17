import React, { Component } from 'react'
import Animation from 'lottie-react-native'

class LottieExample extends Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <Animation
        style={{ flex: 1 }}
        source={require('../Animations/Lottie')}
        ref={animation => { this.animation = animation }}
      />
    )
  }
}

export default LottieExample
