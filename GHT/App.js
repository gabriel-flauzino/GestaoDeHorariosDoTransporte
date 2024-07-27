import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { TabsScreen } from './screens/Tabs';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const StyledView = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
`