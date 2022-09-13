/* Components */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen Imports */
import Home from './screens/Home'

/* Tailwind Imports */
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn'

const Stack = createNativeStackNavigator();

const App = () =>
{
  const tailwind = useTailwind();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name='Home' 
        component={Home} 
      />
    </Stack.Navigator>
  )
}

const Root = () =>
(
  <NavigationContainer>
    <TailwindProvider utilities={utilities}>
      <App />
    </TailwindProvider>
  </NavigationContainer>
)

export default Root;

