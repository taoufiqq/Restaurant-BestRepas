import React, { Component } from 'react';
import {Button, Image, Text } from 'react-native';
import { Container,Content,Header,CardItem, Card, Icon  } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';


export default class Menu extends Component {
  render() {
    return (
        <Container style={{backgroundColor:'#efefef'}}>
        <Header  style={{backgroundColor:'#009F79'}}>

            <MaterialIcons name="food-bank" size={54} color="white" />
        </Header>

        <Content>

          <Card  style={{alignItems:'center'}}>
              <CardItem header>
              <MaterialIcons name="food-bank" size={24} color="black" />
              {/* <Icon name="food-bank" style={{color:'blue'}}>

              </Icon> */}

              </CardItem>
           
          </Card>
        </Content>
      </Container>
    );
  }
}