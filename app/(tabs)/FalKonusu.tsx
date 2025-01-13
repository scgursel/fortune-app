import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FalKonusu = () => {

    return (
        <View style={style.container}>
            <View style={style.falKonusuContainer}>
                <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/love.png")} /><Text style={style.text}>Aşk</Text></View>
                <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/kariyer.png")} /><Text style={style.text}>Aşk</Text></View>

            </View>
            <View style={style.falKonusuContainer}>
                <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/6.png")} /><Text style={style.text}>Aşk</Text></View>
                <View style={style.falImageContainer}><Image style={style.falImage} source={require("../../assets/images/3.png")} /><Text style={style.text}>Aşk</Text></View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50
    },

    falKonusuContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    falImageContainer: {
        minWidth: 140,
        maxWidth: 200,
        minHeight: 140,
        maxHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        backgroundColor: "red",
        margin:2

    },
    falImage: {
        position: "absolute", // Container içinde tamamen yayılması için
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%", 
        height: "100%",
        resizeMode: "cover", 
      },
      
    text: {
        fontSize: 32,
        marginTop: 8,
        color:"#fff",
        fontWeight:"bold",
        fontFamily:'IslandMoments'


    }

})


export default FalKonusu