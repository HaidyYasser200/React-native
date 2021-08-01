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
                        <Image source={require('./../img/Icons/onboard-third-icon–2.png')}
                    style={{width:65, height:60}}/>
                    </View>
                     <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
                 <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',padding:7}}>What Do I Do</Text>
                 <Text style={{color:'gray',fontSize:12,paddingHorizontal:10,textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                     </View>
                
                     <View style={{marginBottom:40,marginTop:10,flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                      <Icon  name='chevron-small-left' type='Entypo'onPress={()=>{
                        this.props.navigation.navigate('AboutSplash2')}}/>
                      <Text style={{fontSize:15,marginRight:40}} onPress={()=>{
                        this.props.navigation.navigate('AboutSplash2')}}>Prev</Text> 

                       <Button rounded  style={{backgroundColor:'#32CD32',width:130,height:30,marginRight:100,justifyContent: 'center',borderRadius:5}}
                       onPress={()=>{ this.props.navigation.navigate('Main')
                       {this.saveUser()}}}>
                       <Text style={{color:'white'}}>Start</Text>
                          </Button>
                      </View>

                </ImageBackground>
              
            
        </Container>
                   
              
        );
    }

    saveUser(){
        AsyncStorage.setItem('user','1');
    }
}



