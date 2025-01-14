import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LinearGradient
      colors={['#1B1455', '#0E0A2C']}
      style={{ flex: 1 }}
    >
      <View className="flex-1 px-8 justify-center">
        <View className="space-y-12">
          {/* Logo ve başlık */}
          <View className="mb-16">
            <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-3xl text-center">
              Logo Falım
            </Text>
            <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-2xl text-center mt-4">
              Falıma Kayıt Ol
            </Text>
          </View>

          {/* Form alanları */}
          <View>
            <View className="mb-8">
              <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-xl mb-4">
                Kullanıcı Adı
              </Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                className="bg-[#2d2d2d] text-white p-4 rounded-lg"
                placeholderTextColor="#666"
                placeholder="Kullanıcı adınız"
              />
            </View>

            <View className="mb-8">
              <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-xl mb-4">
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                className="bg-[#2d2d2d] text-white p-4 rounded-lg"
                placeholderTextColor="#666"
                placeholder="Email adresiniz"
                keyboardType="email-address"
              />
            </View>

            <View className="mb-12">
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

          {/* Kayıt ol butonu */}
          <View className="mt-8">
            <TouchableOpacity 
              className="bg-[#ff8c00] py-4 rounded-lg mb-8"
              onPress={() => router.push('/Login')}
            >
              <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-center text-xl">
                Kayıt ol!
              </Text>
            </TouchableOpacity>

            {/* Giriş yap linki */}
            <View className="flex-row justify-center items-center space-x-2">
              <Text style={{ fontFamily: 'IslandMoments' }} className="text-white text-lg">
                Zaten hesabın var mı?
              </Text>
              <TouchableOpacity onPress={() => router.push('/Login')}>
                <Text style={{ fontFamily: 'IslandMoments' }} className="text-[#ff8c00] text-lg">
                  Giriş yap!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SignUp 