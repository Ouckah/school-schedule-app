import { Text, View } from 'react-native';

/* Tailwind Imports */
import { useTailwind } from 'tailwind-rn'

const ClassCard = ({ name, location, startTime, endTime }) =>
{
    const tailwind = useTailwind();
    return (
        <>
            <View style={tailwind('flex flex-row justify-between items-center bg-white w-full h-1/5 px-5 py-2 rounded-2xl')}>
                <View style={tailwind('flex flex-col')}>
                    <Text style={tailwind('text-dark-blue font-bold text-xl')}>{ name }</Text>
                    <Text style={tailwind('text-dark-blue font-bold text-lg opacity-50')}>{ location }</Text>
                </View>
                <View style={tailwind('flex flex-col justify-evenly items-center')}>
                    <Text style={tailwind('text-dark-blue font-bold text-lg opacity-50')}>{ startTime }</Text>
                    <Text style={tailwind('text-dark-blue font-bold text-lg opacity-50')}>-</Text>
                    <Text style={tailwind('text-dark-blue font-bold text-lg opacity-50')}>{ endTime }</Text>
                </View>
            </View>
        </>
    )
}

export default ClassCard