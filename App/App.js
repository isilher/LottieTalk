import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native'

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden />
        <Text>
          Hello World!
        </Text>
      </View>
    )
  }
}

export default App
