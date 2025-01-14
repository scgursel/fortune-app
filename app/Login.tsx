import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

const Login = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        return (
                <LinearGradient
                        colors={['#1B1455', '#0E0A2C']}
                        style={{ flex: 1 }}
                >
                        <View className="flex-1 px-8 justify-center">
                                <View className="space-y-22">
                                        <View className="space-y-12">
                                                <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-3xl text-center">
                                                        Logo Falım
                                                </Text>
                                                <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-2xl text-center">
                                                        Falıma Giriş yap
                                                </Text>
                                        </View>

                                        <View className="space-y-18">
                                                <View>
                                                        <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-xl mb-4">
                                                                Email
                                                        </Text>
                                                        <TextInput
                                                                value={email}
                                                                onChangeText={setEmail}
                                                                className="bg-[#2d2d2d] text-white p-4 rounded-lg"
                                                                placeholderTextColor="#666"
                                                                placeholder="Email adresiniz"
                                                        />
                                                </View>

                                                <View className="mt-8">
                                                        <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-xl mb-4">
                                                                Şifre
                                                        </Text>
                                                        <TextInput
                                                                value={password}
                                                                onChangeText={setPassword}
                                                                className="bg-[#2d2d2d] text-white p-4 rounded-lg"
                                                                placeholderTextColor="#666"
                                                                placeholder="Şifreniz"
                                                                secureTextEntry
                                                        />
                                                </View>
                                        </View>

                                        <TouchableOpacity
                                                className="bg-[#ff8c00] py-4 rounded-lg mt-12"
                                                onPress={() => router.push('/(tabs)/FalYukleme')}
                                        >
                                                <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-center text-xl">
                                                        Giriş yap
                                                </Text>
                                        </TouchableOpacity>

                                        <View className="flex-row justify-center items-center space-x-2 mt-8">
                                                <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-lg">
                                                        Hesabın yok mu?
                                                </Text>
                                                <TouchableOpacity  onPress={() => router.push('/SignUp')}>
                                                        <Text style={{ fontFamily: 'IslandMoments' }} className="text-[#ff8c00] text-lg">
                                                                Kayıt ol!
                                                        </Text>
                                                </TouchableOpacity>
                                        </View>
                                </View>
                        </View>
                </LinearGradient>
        )
}

export default Login 