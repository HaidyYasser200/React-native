import React, {Component} from 'react';
import {Image,View,Text,ImageBackground} from 'react-native';
import {Container, Header,Content, Card,Title, CardItem, Left, Body,Button,Spinner} from 'native-base';
import All from './All'
import Foot from './Foot';
export default class Things extends Component {
 
    static navigationOptions={
        header:null
      }
      state = {
        dataSource: [],
        loaded: 0,
        index:1,
        regex : /(<([^>]+)>)/ig, 
    }
      componentDidMount() {

        fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2')
            .then((response) =>
            response.json()
        )
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson,
                    loaded: 1,
                    
                }, function () {
                    
                });
            })}
    render() {
        return(
            <Container>
              
                 <Header style={{width: 360, height:100}}>
      <ImageBackground source={require('./../img/Backgrounds/theme-header.png')} style={{width: 360, height:100}}>
             <Left style={{marginTop:10,marginRight:150}}>
             <Title style={{marginTop:20,fontSize:30}}>Things To Do</Title>
          </Left>
        </ImageBackground>
        </Header>
             <Content>
             {this.displaydata()}
             </Content>
             <Foot im="Things"/>
            
            </Container>
        )}
        displaydata=()=>{
          if(this.state.loaded === 0){
            return(
              <View  style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Spinner color="#f00"/>
              </View>
                 )
             }else{
                 return(
                  this.state.dataSource.map((item,num) => {
                    return (
                  <All key={num} img= {item.better_featured_image.source_url}
                 title= {item.slug} pra= {item.excerpt.rendered.replace(this.state.regex, '')}
                address={item.acf.address} content={ item.content.rendered.replace(this.state.regex, '')}
                address={item.acf.address} phone={item.acf.phone_number} email={item.acf.email_address}/>
                 )
        }))}
      }}