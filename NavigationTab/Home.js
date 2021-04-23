import React from 'react'
import {View, ImageBackground, StyleSheet } from 'react-native'


const image = { uri: "https://image.freepik.com/free-vector/muslim-ramadan-kareem-festival-greeting-design_1017-30817.jpg" };
export default function Home() {
    return (
        <View >
        <ImageBackground source={image} style={styles.img} >
      

        </ImageBackground>
      
      </View>
    )
}


const styles = StyleSheet.create({
img: {
    width: 400,
    height: '100%'
}
});


