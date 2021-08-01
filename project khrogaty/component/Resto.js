import React, { Component } from 'react';
import {Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import { Container, Card,CardItem, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Spinner} from 'native-base';
import { withNavigation } from 'react-navigation';
 class Resto extends Component {
  state = {
    dataSource: [],
    loaded:0,
    index:1,
    regex : /(<([^>]+)>)/ig, 
}
   

      componentDidMount() {

        fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
            .then((response) =>
            response.json()
        )
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson,
                    loaded: 1
                }, function () {
                    
                });
            })
            // .catch((error) => {
            //     console.error(error + " fetch error");
            // });

    }
  render() {
    return (
      
      <Content>
          <List >
            <ListItem thumbnail style={{marginTop:10}}>
              <Left >
                <Thumbnail square source={require('./../img/Icons/home-second-icon.png')}
                  style={{width:35, height:40,borderRadius:5}}/>
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={{fontWeight:'bold',fontSize:14,width:250}}>Restaurants & Coffee Shops</Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Button transparent onPress={() =>{
                    {this.props.navigation.navigate('PageResto')}}}>
                  <Text style={{fontSize:13,color:'green',textTransform: 'capitalize'}}>View More</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <Card key={this.state.index} transparent>
                <CardItem style={{flex:12}}>
          {this.displaydata()}
          </CardItem>
            </Card>
        </Content>
      
    );
  }
  displaydata() {
    if(this.state.loaded === 0){
        return(
          <View  style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Spinner color="#f00" />
              </View>
             )
         }else{
            return( 
           this.state.dataSource.map((item,num) => {
                  return (
                    <Body key={num} style={{flex:4}}>
                        <TouchableOpacity  onPress={()=>{
                        this.props.navigation.navigate('Singlepage', {img: item.better_featured_image.source_url
                          , title: item.slug, content: item.content.rendered.replace(this.state.regex, ''),
                          address:item.acf.address,phone:item.acf.phone_number,email:item.acf.email_address   })}}>
                      <Image
                        source={{uri: item.better_featured_image.source_url}}
                        style={{width:100, height: 100, borderRadius: 10}}/>
                        </TouchableOpacity>
                      <Text style={{fontWeight:'bold',fontSize:11,marginTop:4,marginLeft:5}}>{item.slug} </Text>
                 
                      <View style={{flexDirection: 'row',marginTop:5}}>
                 <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
                 <Image source={require('./../img/Icons/map-marker.png')}
                  style={{width:10, height:10,marginLeft:20}}/>
                    </View>
                 <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center'}}>
                <Text numberOfLines={2} style={{fontSize:7,width:70}}>{item.acf.address} </Text>
                 </View>
                     </View>
                      </Body>  )
                })

            )
        }
}}

export default withNavigation(Resto)