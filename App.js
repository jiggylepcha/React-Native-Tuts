import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  // This defines a state. A state is used for data items which can change over time.(variables)
  state = {
    counter:1
  }

  text(){
    return <Text> Inside the Text function {this.state.counter}</Text>  // We can define methods like this also.
  }

  updateCounter(){
    this.setState({counter: 2});  // Updates the state's value.
  }

  render() {
    let pic = {uri: 'https://bit.ly/2jHF5lz'};  // Let makes the pic be visible only inside the render().

    return (
      <View style={styles.container}>
        <Image source={pic} style = {{height: 100, width: 200}}/>
        <Text>Hi this is my first React Native App.</Text>
        <Text>The counter's value is {this.state.counter}</Text>
        {this.text()}
        <Text> This is the updated counter's value {this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
