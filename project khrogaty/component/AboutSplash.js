import React, {Component} from 'react';
import {Image,ImageBackground } from 'react-native';
import {Container, Content, Button,Icon, Card, CardItem,  Body,  Text,H3, View, Left, Right} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';
export default class AboutSplash extends Component {
    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <Container style={{flex:1}}>
           
            <ImageBackground source={require('./../img/Backgrounds/onboarding-bg-left.png')} 
            style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}></View>
                <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                 <Image source={require('./../img/Logo/khrogaty-logo.png')}
                    style={{width:110, height:110}}/>
                    </View>
                   <View style={{flex:2}}></View>
                   <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('./../img/Icons/onboard-first-icon.png')}style={{width:65, height:60}}/>
                   </View> 
                     <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
                 <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',padding:10}}> Places For Going Out</Text>
                 <Text style={{color:'gray',fontSize:12,paddingHorizontal:10,textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                     </View>
                
                     <View style={{flexDirection: 'row',justifyContent:'flex-end',flex:1,margin:3}}>
                     <Text style={{fontSize:17}} onPress={()=>{
                        this.props.navigation.navigate('AboutSplash2')}}>Next</Text>
                   <Icon  name='chevron-small-right' type='Entypo' style={{fontSize:25,color:'black'}} onPress={()=>{
                        this.props.navigation.navigate('AboutSplash2')}}/>
                      </View>

                </ImageBackground>
               
            
        </Container>
                   
              
        );
    }

    saveUser(){
        AsyncStorage.setItem('user','1');
    }
}



