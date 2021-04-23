import React from 'react';
import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({text, onPress}){

    return(

        <TouchableOpacity onPress={onPress}>

            <View style={ styles.button}>

                <Text style={ styles.buttonText}> {text} </Text>

            </View>

         </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    button:{
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:"lightgreen",
        width:'50%',
        left:'25%',
        top:'650%',

    },
    buttonText:{
        color:"black",
        textAlign:'center',
        fontWeight:'bold',
    }
})
