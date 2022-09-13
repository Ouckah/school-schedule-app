import { Text, TouchableOpacity, View } from 'react-native';

/* Tailwind Imports */
import { useTailwind } from 'tailwind-rn'

/* Navigation Imports */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Icon Imports */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FooterNav = ({ navigation }) =>
{
    const dark_blue = '#032a4e'
    const tailwind = useTailwind();

    return (
        <>
            <View style={tailwind('flex flex-row justify-evenly bg-white w-full h-full p-2 rounded-t-2xl')}>

                {/* Home */}
                <TouchableOpacity
                    style={tailwind('flex justify-center items-center w-10 h-10 rounded-full')}
                    onPress=
                    {
                        () => navigation.navigate('Home')
                    }
                >
                    <Text>H</Text>
                    {/* <MaterialCommunityIcons name='home' color={dark_blue} size='1' /> */}
                </TouchableOpacity>

                {/* Daily */}
                <TouchableOpacity
                    style={tailwind('flex justify-center items-center w-10 h-10 rounded-full')}
                    onPress=
                    {
                        () => navigation.navigate('Daily')
                    }
                >
                    <Text>D</Text>
                    {/* <MaterialCommunityIcons name='home' color={dark_blue} size='1' /> */}
                </TouchableOpacity>
            </View>
        </>
    )
}

export default FooterNav