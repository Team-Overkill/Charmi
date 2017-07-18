import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
state = {
  value: 8

}

  render() {
    return (
      
        <View style={{ justifyContent: 'center', width: 300 }}>
  <Slider
    value={this.state.value}
    onValueChange={(value) => this.setState({value})} />
  <Text>Value: {this.state.value}</Text>
</View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
