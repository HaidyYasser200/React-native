import React, {Component} from 'react';
import {Image,View,ImageBackground} from 'react-native';
import {Container,Header, Content, Card, TabHeading,Title, Left,  Text, Button, Tab, Tabs ,Icon} from 'native-base';
import NavSingle from './NavSingle';
import About from './About';
import Map from './Map'
import Foot from './Foot'
import All from './All'
export default class PageResto extends Component {
    static navigationOptions={
        header:null
      }

      state = {
        dataSource: [],
        activity:[],
         places:[],
         foods:[],
        text: '',
        c:0
          }
    
    componentDidMount() {

      fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
          .then((response) =>
          response.json()
      )
          .then((responseJson) => {

              this.setState({
                 places: responseJson,
                  loaded: 1
              }, function () {
                  
              });
          })

          fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
          .then((response) =>
          response.json()
      )
          .then((responseJson) => {

              this.setState({
                  foods:responseJson,
                  loaded: 1
              }, function () {
                  
              });
          })
          fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2')
          .then((response) =>
          response.json()
      )
          .then((responseJson) => {

              this.setState({
                  activity:responseJson,
                  loaded: 1
              }, function () {
                 
              });
          })
         
  }

  render() {
    return (
      <Container>
         <Header style={{width: 360, height:100}}>
      <ImageBackground source={require('./../img/Backgrounds/theme-header.png')} style={{width: 360, height:100}}>
             <Left style={{marginTop:10,marginRight:150}}>
             <Title style={{marginTop:20,fontSize:30}}>Rest/Coffee</Title>
          </Left>
        </ImageBackground>
        </Header>

        <Tabs   tabBarUnderlineStyle={{ backgroundColor: 'green' }}>

          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}>    
                  <Text style={{color:'black'}}>All</Text></TabHeading>} >
                    <Content>
           {this.displaydata()}
                     </Content>
              </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}>
                  <Text style={{color:'black'}}>Restaurant</Text></TabHeading>}>
                  <Content>
           {this.displayResto()}
                     </Content>
          </Tab>
         
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}}>
                  <Text style={{color:'black'}}>Coffee Shops</Text></TabHeading>}>
                  <Content>
           {this.displayResto()}
                     </Content>
          </Tab>

        </Tabs>
        <Foot im="PageResto"/>
       </Container>
     ) }
     displaydata=()=>{
    
      let  a=[...this.state.activity,...this.state.places,...this.state.foods];
              return(
      a.map((item,num) => {
        return(
        <All key={num} img= {item.better_featured_image.source_url}
        title= {item.slug} pra= {item.excerpt.rendered.replace(this.state.regex, '')}
        address={item.acf.address}
        content={item.content.rendered.replace(this.state.regex, '')}
       address={item.acf.address} phone={item.acf.phone_number} email={item.acf.email_address} />)
        }))}
      
        displayResto=()=>{
                  return(
          this.state.foods.map((item,num) => {
            return(
            <All key={num} img= {item.better_featured_image.source_url}
            title= {item.slug} pra= {item.excerpt.rendered.replace(this.state.regex, '')}
            address={item.acf.address}
            content={item.content.rendered.replace(this.state.regex, '')}
           address={item.acf.address} phone={item.acf.phone_number} email={item.acf.email_address} />) 
            }))}
          
          
          
      
      }