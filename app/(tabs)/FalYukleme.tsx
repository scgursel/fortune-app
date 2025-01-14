import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import {router } from 'expo-router'


const FalYukleme = () => {
  const handleGoToFalSonucu = () => {
    router.push("/(tabs)/FalKonusu");
  };
  return (
    <View style={style.container}>
      <View style={style.falContainer}>
        <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/icon.png")} /></View>
        <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/icon.png")} /></View>
        <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/icon.png")} /></View>
      </View>
      <View style={style.inputContainer}>
        <View>
          <Text style={style.textForm}>Adınız</Text>
          <TextInput placeholder='Adınız' style={style.input} />
        </View>
        <View>
          <Text style={style.textForm}>Yaşınız</Text>
          <TextInput placeholder='Yaşınız' keyboardType="numeric" style={style.input} />
        </View>
        <View>
        <Text style={style.textForm}>Cinsiyetiniz</Text>
        <View style={style.genderContainer}>
          <View style={style.genderImageContainer}><Image style={style.genderImage} source={require("../../assets/images/icon.png")} /></View>
          <View style={style.genderImageContainer}><Image style={style.genderImage} source={require("../../assets/images/icon.png")} /></View>
          <View style={style.genderImageContainer}><Image style={style.genderImage} source={require("../../assets/images/icon.png")} /></View>
        </View>
        </View>
        <View>
          <Text style={style.textForm}>Çalışma Durumuz</Text>
          <TextInput placeholder='Adınız' style={style.input} />
        </View>
         </View>
    </View>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  falContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 20
  },
  falImageContainer: {
    minWidth: 100,
    maxWidth: 150,
    minHeight: 100,
    maxHeight: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    margin: 2,
    backgroundColor: "red",

  },
  falImage: {
    maxWidth: 70,
    minWidth: 50,
    maxHeight: 70,
    minHeight: 70
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 40,
    margin: 50,

  },
  textForm: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: "bold"

  },
  input: {
    width: '100%',
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: '#fff',
    color: '#333',
    marginBottom: 20,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  genderImageContainer: {
    minWidth: 90,
    maxWidth: 140,
    minHeight: 90,
    maxHeight: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    backgroundColor: "red",

  },
  genderImage: {
    maxWidth: 60,
    minWidth: 50,
    maxHeight: 60,
    minHeight: 40
  }

})

export default FalYukleme