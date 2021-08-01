import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {Image,StyleSheet,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import PageResto from './PageResto';
import Search from './Search';
import Main from './Main';
import Findplaces from './Findplaces'
import Things from './Things'
 class Foot extends Component {
  handleEntailmentRequest(e) {
    e.preventDefault();
}
  
  render() {
   
    return (
    
        <Footer style={{height:80,justifyContent:'center',alignItems:'center'}}>
          <FooterTab  style={{backgroundColor:"white"}}>
            <Button vertical style={styles.myButton}   type="simpleQuery" 
             onPress={(e) => {this.handleEntailmentRequest(e)
              {this.props.navigation.navigate('Main')}}}>  
              {this.props.im=='Main'? <Image source={require('./../img/Icons/ghome.png')}
                  style={{width:30, height:30}}/>:<Image source={require('./../img/Icons/home.png')}
                  style={{width:30, height:30}}/>}
              <Text style={styles.isText}>Home</Text>
            </Button>
            <Button vertical style={styles.myButton} type="simpleQuery" 
             onPress={(e) => {this.handleEntailmentRequest(e)
              {this.props.navigation.navigate('Search')}}}>   
             {this.props.im=='search'? <Image source={require('./../img/Icons/gfilter.png')}
                  style={{width:30, height:30}}/>:<Image source={require('./../img/Icons/filter.png')}
                  style={{width:30, height:30}}/>}
              <Text style={styles.isText}>Search</Text>
            </Button>
            <Button vertical style={styles.myButton} 
             onPress={(e) => {this.handleEntailmentRequest(e)
              {this.props.navigation.navigate('Findplaces')}}}> 
             {this.props.im=='Places'? <Image source={require('./../img/Icons/gfind-places.png')}
                  style={{width:30, height:30}}/>:<Image source={require('./../img/Icons/find-places.png')}
                  style={{width:30, height:30}}/>}
              <Text style={styles.myText}>Find Places</Text>
            </Button>
            <Button vertical style={styles.myButton}
             onPress={(e) => {this.handleEntailmentRequest(e)
              {this.props.navigation.navigate('PageResto')}}}> 
             {this.props.im=='PageResto'? <Image source={require('./../img/Icons/grestaurants.png')}
                  style={{width:30, height:30}}/>:<Image source={require('./../img/Icons/restaurants.png')}
                  style={{width:30, height:30}}/>}
              <Text style={styles.myText}>Restaurants</Text>
            </Button>
            <Button vertical style={styles.myButton}
            onPress={(e) => {this.handleEntailmentRequest(e)
              {this.props.navigation.navigate('Things')}}}> 
            {this.props.im=='Things'? <Image source={require('./../img/Icons/gtodo.png')}
                  style={{width:30, height:30}}/>:<Image source={require('./../img/Icons/todo.png')}
                  style={{width:30, height:30}}/>}
              <Text style={styles.myText}>Things To do</Text>
            </Button>
          </FooterTab>
        </Footer>
     
    );
  }}
  export default withNavigation(Foot);

  const styles = StyleSheet.create({
   myText:{
    fontSize:11,
    color:"black",
    textTransform: 'capitalize',
    width:100,
    justifyContent:'center',
   alignItems:'center',
   
    
   },
   isText:{
    fontSize:11,
    color:"black",
    textTransform: 'capitalize',
    justifyContent:'center',
    alignItems:'center',
    
   },
   
  });
 
 