import React, { Component } from 'react'
import { Animated, Button, Slider, Text, View } from 'react-native'
import Animation from 'lottie-react-native'

class PlayerExample extends Component {
  constructor(props) {
    super(props)

    const progress = new Animated.Value(0)
    const progressVal = 0
    const duration = 3000
    const playing = false

    progress.addListener(({ value }) => this.setState({ progressVal: value }))

    this.state = { duration, playing, progress, progressVal }
  }

  playAnimation = () => {
    const { duration, progress, progressVal } = this.state
    const playTimeLeft = duration - (progressVal * duration)

    this.setState({ playing: true })

    Animated.timing(progress, {
      toValue: 1,
      duration: playTimeLeft,
    }).start(() => this.setState({ playing: false }))
  }

  pauseAnimation = () => {
    this.setState({ playing: false })
    this.state.progress.stopAnimation()
  }

  render() {
    const { playing, progress, progressVal } = this.state

    return (
      <View style={{ flex: 1 }}>
        <Animation
          style={{ height: 500, width: 800, marginLeft: -90 }}
          source={require('../Animations/Building')}
          progress={progress}
        />

        <Slider
          style={{ margin: 50 }}
          maximumValue={1}
          step={0.001}
          onValueChange={Animated.event([progress])}
          value={progressVal}
        />

        {
          playing
            ? <Button title="Pause" onPress={this.pauseAnimation} />
            : <Button title="Play" onPress={this.playAnimation} />
        }
      </View>
    )
  }
}

export default PlayerExample
