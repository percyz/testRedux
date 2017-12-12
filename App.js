/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { Provider, connect } from 'react-redux';

import { setName } from './redux_test/actions/test';



import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
} from 'react-native';


import { store } from './redux_test/store';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class InnerDisplay extends Component<{}> {


  constructor() {
    super();


    this.save = this.save.bind(this);
  }



  save() {
    console.log("Hello");


    //store.dispatch(setName("new name"));
    this.props.saveName("new name");

  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {this.props.name} Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          <TouchableOpacity onPress={this.save}>
            <Text>Push Me</Text>
          </TouchableOpacity>
      </View>
    );
  }
}



const propData = (state, ownProps) => {

  //console.log("Model::: " + JSON.stringify(state));

  return {
      name: state.name,
      testing: 'Temp',
      myProperty: ownProps.myProperty + " Something ",
  };
};


const propFunctions = (dispatch, ownProps) => {
  return {
    saveName: (name) => {
       dispatch(setName(name));
    }
  };
};



const Inner = connect(
    propData,
    propFunctions
)(InnerDisplay);








export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
              <Inner myProperty={"Testing4"} />
            </Provider>

            /*<InnerDisplay></InnerDisplay>*/

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




