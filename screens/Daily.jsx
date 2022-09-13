import { Text, View, TouchableOpacity } from 'react-native';

/* Components */
import ClassCard from '../components/ClassCard';
import FooterNav from '../components/FooterNav';

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';

/* Tailwind Imports */
import { useTailwind } from 'tailwind-rn'

function Daily({ navigation })
{
    // tailwind 
    const tailwind = useTailwind();

    // time & date
    let date = new Date();

    return (
        <>

            <View style={tailwind('bg-red-200 flex justify-center items-center w-full h-full')}>
                <View style={tailwind('justify-center items-center w-full h-5/6')}>
                    <Text>This is the daily page!</Text>
                </View>
                <View style={tailwind('w-full h-1/6')}>
                    <FooterNav 
                        navigation={navigation}
                    />
                </View>
            </View>
        
        </>
    )
}

export default Daily;