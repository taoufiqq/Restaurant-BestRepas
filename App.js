import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from './NavigationTab/Home'
import Menu from './NavigationTab/Menu'
import Panier from './NavigationTab/Panier'

//  import image from  './assets/bg.png' ;
const image = { uri: "https://image.freepik.com/free-vector/muslim-ramadan-kareem-festival-greeting-design_1017-30817.jpg" };



 function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Home/>
    </View>
  );
}

function MenuScreen() {
  return (
    <View>
      <Menu/>
    </View>
  );
}

function PanierScreen() {
  return (
    <View>
      <Panier/>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
    <Tab.Navigator>

      <Tab.Screen
      options={{
        tabBarLabel:'Home',
        tabBarIcon: () => (
          <Feather name="home" size={24} color="#009F79" />
        )
      }} name="HomeScreen" component={HomeScreen} />

       <Tab.Screen
      options={{
        tabBarLabel:'Menu',
        tabBarIcon: () => (
          <MaterialIcons name="restaurant-menu" size={24} color="#009F79" />
         
        )
      }} name="restaurant-menu" component={MenuScreen} />

        <Tab.Screen
      options={{
        tabBarLabel:'Panier',
        tabBarIcon: () => (
          <AntDesign name="shoppingcart" size={24} color="#009F79" />
         
        )
      }} name="restaurant-panier" component={PanierScreen} />
     
    </Tab.Navigator>
  </NavigationContainer>




  );
}

const styles = StyleSheet.create({

});
