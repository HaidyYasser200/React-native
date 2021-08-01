import React, {Component} from 'react';
import {Image,View} from 'react-native';
import {Container,Header, Content, Card, TabHeading, CardItem,  Body,  Text, Button, Tab, Tabs ,Icon} from 'native-base';
import NavSingle from './NavSingle';
import About from './About';
import Map from './Map'
export default class Singlepage extends Component {
    static navigationOptions={
        header:null
      }
     
  render() {
    return (
      <Container>
        <NavSingle title={this.props.navigation.getParam('title')}/>
        <Tabs   tabBarUnderlineStyle={{ backgroundColor: 'green' }}>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}>    
            <Image source={require('./../img/Icons/gabout.png')}
                  style={{width:20, height:20,margin:5}}/>
                  <Text style={{color:'black'}}>About</Text></TabHeading>}
                >
            <About />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Image source={require('./../img/Icons/map-marker.png')}
                  style={{width:20, height:20,margin:5}}/>
                  <Text style={{color:'black'}}>Map</Text></TabHeading>}>
            <Map/>
          </Tab>
        </Tabs>
       </Container>
     ) }
}
