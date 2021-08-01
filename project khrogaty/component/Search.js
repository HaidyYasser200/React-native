import React, { Component } from 'react';
import { Container, Header, Content, Text,Left,Title,Item, Input, Icon, View, Card, CardItem,Spinner } from 'native-base';
import {Image,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import { withNavigation } from 'react-navigation';
import Foot from './Foot'
import All from './All';
import AboutSplash2 from './AboutSplash2'
import { thisExpression } from '@babel/types';

 class Search extends Component {
    static navigationOptions={
        header:null
      }
      state = {
        dataSource: [],
        activity:[],
         places:[],
         foods:[],
         result:[],
        text: '',
        c:0,
        loaded:0
          }
    
    componentDidMount() {

      fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
          .then((response) =>
          response.json()
      )
          .then((responseJson) => {

              this.setState({
                 places: responseJson,
                 loaded:1
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
                  loaded:1
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
                   loaded:1
              }, function () {
                 
              });
          })
         
  }
  
  
  render() {
    
   
    return (
     
        <Container> 
              <Header style={{width: 360, height:100}}>
      <ImageBackground source={require('./../img/Backgrounds/theme-header.png')} style={{width: 360, height:100}}>
             <Left style={{marginRight:220,marginTop:10}}>
             <Title style={{marginTop:20,fontSize:30}}>Search</Title>
          </Left>
        </ImageBackground>
        </Header>

            <Content>
              <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Card style={styles.searchSection}>
            
            <Icon name="ios-search" style={styles.searchIcon}  onPress={()=>{
             this.setState({
               c:1,
             })
             this.displaydata()
             }} />
            <TextInput 
                    style={{borderRadius:10,justifyContent: 'center',
                    alignItems: 'center',flex:1}}
                    onChangeText={text1 => this.setState({text:text1})}
                    value={this.state.text}
                    placeholder="Search here by place" />    
            </Card>
            </View>
            {this.state.c===1? this.displayAll()
                  :   <View style={{justifyContent:'center',alignItems:'center',marginTop:100,flex:1}}>
                  <ImageBackground source={require('./../img/Icons/nosearch-icon.png')} style={{width: 135, height:135}}>
                 
                 </ImageBackground>
                 <Text style={{color:'gray',margin:7}}>Search for any places</Text>
                  </View>  }
           
       
          
           </Content>
        <Foot im="search"/>
        </Container>
    )}
    
  displaydata=()=>{
    let result1=[]
    let  a=[...this.state.activity,...this.state.places,...this.state.foods];
   
    a.map((item) => {
          
        item.slug.includes(this.state.text)? 
        result1.push(item):null
      
             }) 
       this.setState({
         result:result1,
       })
    
          }

            displayAll=()=>{
              if(this.state.loaded === 0){
                return(
                  // <View  style={{alignItems:'center',justifyContent:'center',flex:1}}>
              <Spinner color="#f00"/>
                  //  </View>
                     )
                 }else{
                     return(
                      this.state.result==''?<View  style={{justifyContent:'center',alignItems:'center',flex:1,marginTop:30}}>
                        <Text style={{color:'green',fontSize:20}}>
                        not found</Text></View>:
                 this.state.result.map((item,num) => {
                      return(
                  <View key={num}>
                 <All img= {item.better_featured_image.source_url}
              title= {item.slug} pra= {item.excerpt.rendered.replace(this.state.regex, '')}
           address={item.acf.address}
        content={item.content.rendered.replace(this.state.regex, '')}
       address={item.acf.address} phone={item.acf.phone_number} email={item.acf.email_address} />
                  
                  </View> 
                
                       ) }) )
          
             } }    
     
      }

    export default withNavigation(Search);
    const styles = StyleSheet.create({
      searchSection: {
        flexDirection: 'row',
        marginTop:50,
        width:285,
        borderRadius:7,
    },
    searchIcon: {
         padding: 10,
        marginLeft:5,
        color:'gray'
    },
     });