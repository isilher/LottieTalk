import React, { Component } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import Animation from 'lottie-react-native'

class ButtonExample extends Component {
  pressStar = () => {
    this.animation.play()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <TouchableWithoutFeedback onPress={this.pressStar}>
            <Animation
              style={{ width: 200, height: 200 }}
              source={require('../Animations/FavouriteAppIcon')}
              ref={animation => { this.animation = animation }}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default ButtonExample
