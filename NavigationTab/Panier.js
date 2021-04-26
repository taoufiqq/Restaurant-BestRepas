import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView,ToastAndroid } from 'react-native'
import {Header,Toast } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
 
  {
    id: '2',
    title: 'Harira',
    price: 20,
    image: require('./../assets/hrira.jpg'),

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

   <View style={{flexDirection: 'row',elevation: 10, justifyContent: 'space-between'}}>
       <Image source={image} style={{width: '30%', marginBottom: 10, height:70,borderRadius:5 }}/>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.price}>{price} DH</Text>
    </View>

</View>

)
const showToast = () => {
    ToastAndroid.showWithGravity(
      "Your Order has been saved Successfully Net to pay: 45 DH",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  };

export default function Panier() {

  const renderItem = ({item}) => (
    <Item title={item.title} price={item.price} image={item.image}/>
  )
  return (
 <View>
   <Header  style={{backgroundColor:'orange'}}>

   <MaterialIcons name="fact-check" size={50} color="white" />
</Header>    
<ScrollView  vertical={true} style={{marginBottom: 120}}>
     <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={item => item.id}

     />
  </ScrollView>  
 <TouchableOpacity
      style={styles.button}
      onPress={() => showToast()}
    >
      <Text style={styles.textButton}>Checkout</Text>
    </TouchableOpacity>
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
   backgroundColor: 'orange',
   paddingHorizontal: 10,
   paddingVertical: 10,
   borderRadius: 5,

   width:'50%',
   marginLeft:100
   
  
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


