/* Components */
import Welcome from "./components/welcome";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* Tailwind Imports */
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn'

const App = () =>
{
  const tailwind = useTailwind();

  return (
    <>
      <View style={tailwind('flex flex-row justify-center items-center w-full h-full')}>
        <Welcome />
        <StatusBar style="auto" />
      </View>
    </>
  )
}

const Root = () =>
(
  <TailwindProvider utilities={utilities}>
    <App />
  </TailwindProvider>
)

export default Root;

