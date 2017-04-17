import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'
import Animation from 'lottie-react-native'

class App extends Component {
  componentDidMount() {
    this.animation.play()
  }

  render() {
    return (
      <Animation
        style={{ flex: 1 }}
        source={require('./Animations/Lottie')}
        ref={animation => { this.animation = animation }}
      />
    )
  }
}

export default App
