import { StyleSheet, Text, View } from 'react-native';

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';

/* Tailwind Imports */
import { useTailwind } from 'tailwind-rn'

function Home()
{
    // tailwind 
    const tailwind = useTailwind();

    // time & date
    let date = new Date();

    return (
        // Time & Date Text
        <View style={tailwind('w-full h-1/2 pt-10 px-5 bg-dark-blue rounded-b-xl')}>
            <View style={tailwind('flex flex-row justify-between w-full h-1/3')}>
                <View style={tailwind('flex flex-col justify-center items-start')}>
                    <Text style={tailwind('text-white font-bold text-4xl')}>Monday</Text>
                    <Text style={tailwind('text-white font-extralight text-lg opacity-50')}>Sep 12 2022</Text>
                </View>
                <View style={tailwind('flex flex-col justify-center items-end')}>
                    <Text style={tailwind('font-bold text-white text-4xl')}>8:32</Text>
                    <Text style={tailwind('text-white font-extralight text-2xl opacity-40')}>AM</Text>
                </View>
            </View>
        </View>

        // Add Button

        // To Do List
    )
}

export default Home;