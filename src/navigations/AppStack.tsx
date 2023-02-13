import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import HomeScreen from '../screens/Home';
import GreetingsScreen from '../screens/Greeting';

const {Navigator, Screen} = createNativeStackNavigator();

const AppStack: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="greetingsScreen" component={GreetingsScreen} />
      <Screen name="homeScreen" component={HomeScreen} />
    </Navigator>
  );
};

export default AppStack;
