import React, { Component } from 'react';
import {Image,ImageBackground} from 'react-native';
import {Header } from 'native-base';
export default class Nav extends Component {
 
  render() {
    return (
      
        <Header span>
         <ImageBackground source={require('./../img/Backgrounds/home-header.png')} style={{width: 360, height: 128}}>
         <Image source={require('./../img/Logo/khrogaty-logo.png')}
                  style={{width:90, height: 90,marginLeft:135,marginTop:20}}/>
          </ImageBackground>
       
        </Header>)}
}
