import React, { Component } from 'react';
import {  Card, CardItem,List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Content } from 'native-base';
import {Image,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
export default class Comments extends Component {
  state = {
    text: '',
    dataSource:[],
    loaded:'',
  
}


setdata=()=>{
  fetch('http://reactnative.website/iti/wp-json/wp/v2/comments? '+
  'author_name=User&author_email=hosam@roqay.com.kw&content='+this.state.text+'&post=7',
   {
    method: 'POST', 
    headers: {   
          Accept: 'application/json',       
         'Content-Type': 'application/json',           
         }       })
      this.displaydata()
}

displaydata=()=> {

  fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?post=7')
      .then((response) =>
      response.json()
  )
      .then((responseJson) => {

          this.setState({
              dataSource: responseJson.reverse(),
              loaded: 1,
              
          }, function () {
              
          });
      })

}
componentDidMount(){
  this.displaydata()
}


  render() {
    return (
     <Content>
       {this.data()}
      <Card style={styles.searchSection}>
        
             <TextInput 
              style={{borderRadius:10,justifyContent: 'center',
              alignItems: 'center',flex:1}}
              onChangeText={text => this.setState({text})}
              value={this.state.text}
              placeholder="   write here...." />    
               <TouchableOpacity  onPress={()=>{this.setdata()}}>
            <Image source={require('./../img/Icons/telegram.png')}  style={styles.searchIcon} />
            </TouchableOpacity>
      </Card>
     </Content>
    );
  }
  data=()=>{
    return(
    this.state.dataSource.map((item) => {
      return (
        
        <List  key={item.id}  style={{borderBottomWidth:1,borderBottomColor:'#cfcccc'}}>
          <ListItem avatar noBorder  style={{margin:10}}>
          <Left  >
            <Image source={require('./../img/Icons/profile.png')}  style={{width:45,height:45}}/>
          </Left>
          <Body>
            <Text style={{fontWeight:'bold',fontSize:17}}>{item.author_name}</Text>
            <Text note style={{fontSize:15}}>{item.content.rendered}</Text>
          </Body>
          <Right style={{marginRight:30}}>
            <Text note style={{fontSize:13}}>{(item.date).substring(11,item.date.length-3)+((item.date).substring(10,12)==='T1'?'PM':'AM')}</Text>
          </Right>
          </ListItem>
      </List>
      )})
    )}
}
const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight:15,
    width:330,
    borderRadius:8,
    borderRadius:10,
    justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop:25
},
searchIcon: {
     padding: 10,
    marginRight:10,
    width:30,
    height:27
},
 });