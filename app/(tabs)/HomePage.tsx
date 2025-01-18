import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font';
import Navbar from './Navbar'

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  imageText: {
    fontFamily: "IslandMoments",
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -20 }],
    width: '100%',
    textAlign: 'center',
    fontSize: 70,
    color: "#D9D9D9",
    textShadowColor: "#000",  // Gölge rengi
    textShadowOffset: { width: 3, height: 3 },  // Gölge boyutu
    textShadowRadius: 4,  // Gölge yayılma
  }
});

const HomePage = () => {
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'IslandMoments': require('../../assets/fonts/IslandMoments.ttf'),
      });
    }
    loadFont();
  }, []);

  return (
    <LinearGradient
      colors={['#1B1455', '#0E0A2C']}
      style={{ flex: 1 }}
    >
      <Navbar/>
      <View style={style.container}>
        <Text className='text-4xl mt-16 mb-12 ' style={{ fontFamily: "IslandMoments", color: "#D9D9D9" }}>
          Iyi Akşamlar, Baran Buket
        </Text>
        <View className="flex-1 justify-center items-center mt-7">
          <View className="flex-col space-y-4 w-full px-4 gap-8">
            <Pressable
              onPress={() => console.log('First image pressed')}
              className="w-full aspect-[2/1] relative"
            >
              <View className="w-full h-full">
                <Image
                  source={require('../../assets/images/kahve.png')}
                  className="w-full h-full rounded-lg"
                />
                <Text style={style.imageText}>Kahve Falı</Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => console.log('Second image pressed')}
              className="w-full aspect-[2/1] relative"
            >
              <View className='w-full h-full'>
                <Image
                  source={require('../../assets/images/niyet.png')}
                  className="w-full h-full rounded-lg"
                />
                <Text style={style.imageText}>Niyetime iç</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default HomePage