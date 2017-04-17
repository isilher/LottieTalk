import React, { Component } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import Animation from 'lottie-react-native'

class AnimatedExample extends Component {
  constructor(props) {
    super(props)

    const progress = new Animated.Value(0)

    this.state = { progress }
  }

  pressStar = () => {
    this.state.progress.setValue(0)
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
    }).start()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <TouchableWithoutFeedback onPress={this.pressStar}>
            <Animation
              style={{ width: 200, height: 200 }}
              source={require('../Animations/FavouriteAppIcon')}
              progress={this.state.progress}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default AnimatedExample
