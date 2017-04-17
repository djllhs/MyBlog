'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Login from './app/src/webapp/components/login/Login.js'
class Root extends React.Component {
  render() {
    const defaultName= 'Login',
        defaultComponent = Login
    return (
      <Navigator
        initialRoute={{name: defaultName, component: defaultComponent}}
        configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight ;
          }}
        renderScene={(route, navigator) =>
            {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }

        }
      />
    )
  }
}

AppRegistry.registerComponent('rntest', () => Root);
