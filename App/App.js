import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Animation from 'lottie-react-native'

import LottieExample from './Examples/LottieExample'
import ButtonExample from './Examples/ButtonExample'
import AnimatedExample from './Examples/AnimatedExample'
import SliderExample from './Examples/SliderExample'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <SliderExample />
      </View>
    )
  }
}

export default App
