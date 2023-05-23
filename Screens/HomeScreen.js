import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
    const handelLogout = async () => {
        await signOut(auth)
    }
    return (
        <SafeAreaView className='flex-1 flex-row justify-center items-center'>
            <TouchableOpacity className='p-1 bg-slate-500 rounded-lg' onPress={handelLogout}>
                <Text className='text-yellow-300 text-lg font-bold'>Log Out</Text>
            </TouchableOpacity>
            <Text className='text-lg'>Home </Text>
        </SafeAreaView>
    )
}