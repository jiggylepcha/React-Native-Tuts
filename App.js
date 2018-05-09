/*
    @author: Jigme Lobsang Lepcha

    Assuming npm is already installed install React Native by typing in the command npm install -g create-react-native-app

    To create a project use the command creat-react-native-app <Project Name>
    cd <Project Name>
    npm start

    Install Expo app and scan the QR code to view the app live.
*/


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

  render() {
    let pic = {uri: 'https://bit.ly/2jHF5lz'};  // Let makes the pic be visible only inside the render().

    return( 
      <View style={styles.container}>
        <Image source={pic} style = {{height: 100, width: 200}}/>
        <Text>Hi this is my first React Native App.</Text>
        <Text>The counter's value is {this.state.counter}</Text>
        {this.text()}
      </View>
    );  // This needs to be called when you need to render your component on screen.
    // Source is a prop.
  }
}

class NewApp extends React.Component {
  render(){
    return(
        <Text>Hello {this.props.name}!</Text>
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
