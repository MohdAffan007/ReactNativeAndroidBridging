// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RNHighScores from '../screens/RNHighScores';
import SecondScreen from '../screens/SecondScreen'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RNHighScores" component={RNHighScores} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
