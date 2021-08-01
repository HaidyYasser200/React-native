import React, {Component} from 'react';
import {Image,View,Text} from 'react-native';
import {Container, Content, Card, CardItem, Left, Body,Button} from 'native-base';
import Singlepage from './Singlepage';
import { withNavigation } from 'react-navigation';
class All extends Component {
    state = {
       
        regex : /(<([^>]+)>)/ig, 
    }
    render() {
        return (
            // <Content>
                 this.displaydata()          
            // </Content>
        )}
        displaydata() {
            return(
                 
              
               <Card  style={{borderRadius: 10,marginLeft: 15,marginRight:15,marginTop:10}}>
                  <CardItem style={{borderRadius:10}}>
                           <Left>
                            <Image        
                              source={{uri: this.props.img}}
                                          style={{width: 120, height:190, borderRadius: 10}}/>
                                  </Left>
                                  <Body>
                                  <Text style={{
                                      fontWeight: 'bold', color: '#000',
                                      marginBottom: 5,fontSize:15
                                  }}>{this.props.title}</Text>

                                  <View style={{flexDirection: 'row',margin:5}}>
                                  <Image source={require('./../img/Icons/address.png')}
                                  style={{width:16, height:16,padding:10}}/>  
                            <Text style={{fontSize:11,color:'green',margin:3}}>{this.props.address}</Text>
                                  </View>
                                  <Text>{this.props.pra}</Text>

                           <Button rounded  style={{backgroundColor:'green',width:100,height:30,margin:10,justifyContent: 'center'}}
                           onPress={() =>{
                            {this.props.navigation.navigate('Singlepage',{img:this.props.img
                                , title:this.props.title, content: this.props.content.replace(this.state.regex, ''),
                               address:this.props.address,phone:this.props.phone,email:this.props.email  })}}}> 
                            <Text style={{color:'white'}}>Details</Text>
                                        </Button>
                                  </Body>
                              </CardItem>
                          </Card>
                          
                        )
                    
            
            
                }
    }
    export default withNavigation(All)