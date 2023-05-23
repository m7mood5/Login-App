import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
    const navigation = useNavigation();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handelSubmit=async()=>{
        if(email,password){
            try{
                await signInWithEmailAndPassword(auth,email,password);
            }catch(err){
                console.log('gotError: ',err.message)
            }
        }

    }
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex ">
                <View className="flex-row justify-start">
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                        <AntDesign name="arrowright" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require('../assets/images/login.png')}
                        style={{ width: 200, height: 200 }} />
                </View>


            </SafeAreaView>
            <View
                style={{ borderTopLeftRadius: 70, borderTopRightRadius: 70 }}
                className="flex-1 bg-white px-8 pt-8">
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Email Address</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        placeholder="email"
                        value={email}
                        onChangeText={value=>setEmail(value)}
                    />
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput
                        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        secureTextEntry
                        placeholder="password"
                        value={password}
                        onChangeText={value=>setPassword(value)}
                    />
                    <TouchableOpacity className="flex items-end">
                        <Text className="text-gray-700 mb-5">Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="py-3 bg-yellow-400 rounded-xl"
                        onPress={handelSubmit}
                        >
                        
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                </View>
                <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
                <View className="flex-row justify-center space-x-12">
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                        <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                        <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                        <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text className="font-semibold text-yellow-500"> Sign Up</Text>
                    </TouchableOpacity>
                    <Text className="text-gray-500 font-semibold">
                        Don't have an account?
                    </Text>
                </View>

            </View>
        </View>

    )
}