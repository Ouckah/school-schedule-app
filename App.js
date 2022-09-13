/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screen Imports */
import Home from './screens/Home'
import Daily from './screens/Daily';

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
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Daily' component={Daily} />
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

