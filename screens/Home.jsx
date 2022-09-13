import { StyleSheet, Text, View } from 'react-native';

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';

/* Tailwind Imports */
import { useTailwind } from 'tailwind-rn'

function Home()
{
    const tailwind = useTailwind();

    return (
        <View style={tailwind('w-full h-1/2 bg-dark-blue rounded-b-xl')}>
            
        </View>
    )
}

export default Home;