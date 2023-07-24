import React from 'react';
import { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { LoginContext } from '../contexts/LoginContexts';

export default function Router() {
  const Stack = createNativeStackNavigator();

  let {isLogin} = useContext(LoginContext)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {isLogin ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeScreen"
            component={HomeScreen}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
