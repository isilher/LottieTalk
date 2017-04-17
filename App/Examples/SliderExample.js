import React, { Component } from 'react'
import { Animated, Slider, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

class SliderExample extends Component {
  constructor(props) {
    super(props)

    const sliderVal = new Animated.Value(0)

    const scrollToProgress = sliderVal.interpolate({
      inputRange: [0, 500],
      outputRange: [0, 1],
    })

    this.state = { sliderVal, scrollToProgress }
  }

  render() {
    const { sliderVal, scrollToProgress } = this.state

    return (
      <View style={{ flex: 1 }}>
        <Animation
          style={{ height: 500, width: 800, position: 'absolute', left: -95, top: 50 }}
          source={require('../Animations/Building')}
          progress={scrollToProgress}
        />

        <Text style={{ margin: 20, fontSize: 22 }}>
          Indicate how finished your project is using this slider:
        </Text>

        <Slider
          style={{transform: [{translateY: 200}, {rotate:'-90deg'}]}}
          maximumValue={500}
          step={1}
          onValueChange={Animated.event([sliderVal])}
        />
      </View>
    )
  }
}

export default SliderExample
