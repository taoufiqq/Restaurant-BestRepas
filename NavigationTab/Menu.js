import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { Container,Content,Header,CardItem, Card, Icon  } from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Tajine',
    price: 100,
    image: require('./../assets/tajine.jpg'),

  },
  {
    id: '2',
    title: 'Harira',
    price: 20,
    image: require('./../assets/hrira.jpg'),

  },
  {
    id: '3',
    title: 'Fish',
    price: 120,
    image: require('./../assets/fish.jpg'),
    
  },
  {
    id: '4',
    title: 'Eau 1.5L',
    price: 10,
    image: require('./../assets/eau.jpg'),
    
  },
  {
    id: '5',
    title: 'Jus de Citron',
    price: 15,
    image: require('./../assets/citron.jpg'),
    
  },
];



const Item = ({title, price, image}) => (
  <View style={styles.card}>
  <View style={{elevation: 10}}>
       <Image source={image} style={{width: 'auto', marginBottom: 20, height:250 }}/>
     </View>
     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.price}>{price} DH</Text>
     </View>
     <View>
     <TouchableOpacity
      style={styles.button}
      // onPress={()=>navigation.navigate("Panier",{data:item})}
    >
      <Text style={styles.textButton}>Add</Text>
    </TouchableOpacity>
     </View>
</View>
)
// const storeData = async (value) => {
//   try {
//     await AsyncStorage.setItem('@storage_Key', value)
//   } catch (e) {
   
//   }
// }

export default function Menu() {

  const renderItem = ({item}) => (
    <Item title={item.title} price={item.price} image={item.image}/>
  )
  return (
 <View>
   <Header  style={{backgroundColor:'#009F79'}}>

<MaterialIcons name="food-bank" size={54} color="white" />
</Header>    
<ScrollView  vertical={true} style={{marginBottom: 120}}>
     <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     />
  </ScrollView>  
 </View>
  )
}



const styles = StyleSheet.create({
card: {
 paddingHorizontal: 10,
 paddingVertical: 10,
 margin: 10,
 borderRadius: 5,
 backgroundColor: 'white',
 elevation: 10

},
 button: {
   backgroundColor: 'red',
   paddingHorizontal: 10,
   paddingVertical: 10,
   borderRadius: 5,
   marginTop: 10,
  
 },
 textButton:{
  color:'white',
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center'
 },
 title:{
   fontSize:18,
   fontWeight:'bold',
   color:'green',
 },
 price:{
  fontSize:18,
  fontWeight:'bold',
  color:'green',
 }
});
