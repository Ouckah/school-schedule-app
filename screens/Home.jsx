import { Text, View, TouchableOpacity } from 'react-native';

/* Components */
import ClassCard from '../components/ClassCard';

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
        <>
            <View style={tailwind('bg-gray-200 w-full h-full')}>
                <View style={tailwind('flex flex-col justify-between items-center w-full h-1/2 pt-10 pb-5 px-5 bg-dark-blue rounded-b-xl')}>
                    
                    {/* Time & Date Text */}
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

                    {/* Class Tabs */}
                    <ClassCard 
                        name='CS-101'
                        location='Zoom Meeting'
                        startTime='9:00 AM'
                        endTime='9:50 AM'    
                    />
                    <ClassCard 
                        name='MA-125'
                        location='North Building 105'
                        startTime='10:00 AM'
                        endTime='10:50 AM'
                    />

                    {/* Add Button */}
                    <TouchableOpacity style={tailwind('flex justify-center items-center bg-light-blue w-10 h-10 rounded-full')}>
                        <Text style={tailwind('text-white font-bold text-4xl')}>+</Text>
                    </TouchableOpacity>
                </View>

                {/* To Do List */}
                <View style={tailwind('bg-gray-200 w-full h-1/2 p-6')}>
                    <View style={tailwind('bg-white w-full h-4/5 rounded-xl p-5')}>
                        <Text style={tailwind('text-dark-blue font-bold text-4xl')}>To Do</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Home;