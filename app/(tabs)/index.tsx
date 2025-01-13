import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const app= () => {
  return (
    <View>
      <Link href="/FalYukleme">Falınızı yükleyin </Link>
      <Link href="/FalSonucu">Fal sonucu</Link>
      <Link href="/FalKonusu">Fal sonucu</Link>

      <Pressable
        onPress={() =>
          router.push({
          pathname:"/FalSonucu",
          })
        }
      >
        <Text>FAL sONUÇ 2</Text>
      </Pressable>
 
      <Text>indexaaaaaaaaa</Text>
    </View>
  )
}

export default app