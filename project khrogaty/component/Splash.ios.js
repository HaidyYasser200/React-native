import React, {Component} from 'react';
import {Image,ImageBackground} from 'react-native';
import {Container, Content, Card, CardItem, Body, Text, Spinner} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';
export default class Splash extends Component {
    static navigationOptions = {
        header: null,
    };
   settime=()=>{
      setTimeout(()=>{
        AsyncStorage.getItem('user').then((response)=>{
            if(response === '1'){
                this.props.navigation.navigate('Main')

            }else {
                this.props.navigation.navigate('AboutSplash')
            }
        })

    },1000)
}

    render() {
        return (
            <Container>
               
                <ImageBackground source={require('./img/Backgrounds/splash-bg.png')} 
                style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').height,justifyContent:'center',alignItems:'center'}}>
                     <Image source={require('./../img/Logo/khrogaty-logo.png')}
                        style={{width:110, height:110}}/>
                    </ImageBackground>
                    {this.settime()}
              
            </Container>
        );
    }
}