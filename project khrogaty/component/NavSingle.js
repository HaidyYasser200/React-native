import React, { Component } from 'react';
import {Image,ImageBackground} from 'react-native';
import {  Header,Title, Button, Icon, Left, Right, Body} from 'native-base';
import { withNavigation } from 'react-navigation';
 class NavSingle extends Component {
 
  render() {
    return (
      
        <Header style={{width: 360, height:100}}>
      <ImageBackground source={require('./../img/Backgrounds/theme-header.png')} style={{width: 360, height:100}}>
             <Left style={{marginRight:280,marginTop:10}}>
             {this.backFunction()}
          </Left>
          <Body >
            <Title style={{marginTop:17}}>{this.props.title}</Title>
          </Body>
          <Right/>
        </ImageBackground>
        </Header>
       )}
       backFunction(){
        if(!this.props.home){
            return(
                <Button transparent onPress={()=>{
                    this.props.navigation.goBack();
                }}>
                     <Icon name="arrow-back" />
                </Button>

            )
        }
    }
}
export default withNavigation(NavSingle);