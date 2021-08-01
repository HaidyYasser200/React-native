import React, {Component} from 'react';
import {Image,View} from 'react-native';
import {Container, Content, Card, CardItem,  Body,  Text, Button, Icon} from 'native-base';
import { withNavigation } from 'react-navigation';
import Comments from './Comments';
 class About extends Component {
  
  render() {
    
    return (
      
        
        <Content >
        <Image
               source={{uri: this.props.navigation.getParam('img')}}
                style={{width: '100%', height: 220}}/>
           <Card style={{borderRadius: 10,marginLeft: 15,marginRight:15,marginTop:25}}>
                 <CardItem style={{borderRadius: 10}}>
                <Body>
                <Text style={{fontWeight:'bold',fontSize:25,marginTop:5}}>{this.props.navigation.getParam('title')}</Text>
                 <Text style={{color:'gray'}}>{this.props.navigation.getParam('content')}</Text>
                </Body>
                 </CardItem>
                 </Card>
             <Text style={{fontWeight:'bold',fontSize:22,marginTop:15,marginLeft:23}}>More Information</Text>
                 <Card style={{borderRadius: 10,marginLeft: 15,marginRight:15,marginTop:25}}>
                 <CardItem style={{borderRadius: 10}}>
                
                 <View style={{flexDirection: 'row',marginTop:5}}>
                 <View style={{ flex: 1}}>
                 <Image source={require('./../img/Icons/address.png')}
                  style={{width:16, height:18,padding:10}}/>
                    </View>
                 <View style={{ flex: 8}}>
                <Text style={{fontSize:15,color:'gray'}}>{this.props.navigation.getParam('address')}</Text>
                 </View>
                     </View>
             </CardItem>
             <CardItem style={{borderRadius: 10}}>
                     <View style={{flexDirection: 'row',marginTop:5}}>
                 <View style={{ flex: 1}}>
                 <Image source={require('./../img/Icons/call.png')}
                  style={{width:16, height:18,padding:10}}/>
                    </View>
                 <View style={{ flex: 8}}>
                <Text style={{fontSize:15,color:'gray'}}>{this.props.navigation.getParam('phone')}</Text>
                 </View>
                     </View>
                </CardItem>
                <CardItem style={{borderRadius: 10}}>
                <View style={{flexDirection: 'row',marginTop:5}}>
                 <View style={{ flex: 1}}>
                 <Image source={require('./../img/Icons/mail.png')}
                  style={{width:16, height:18,padding:10}}/>
                    </View>
                 <View style={{ flex: 8}}>
                <Text style={{fontSize:15,color:'gray'}}>{this.props.navigation.getParam('email')}</Text>
                 </View>
                     </View>
                   </CardItem>
              </Card>
      <Text style={{fontWeight:'bold',fontSize:22,marginTop:15,marginLeft:23}}>Leave a Comment</Text>
                 <Comments/>
        </Content>
    
    );
  }
}
export default withNavigation(About)