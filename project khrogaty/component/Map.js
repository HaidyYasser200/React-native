import React, {Component} from 'react';
import {Image,View} from 'react-native';
import {Container, Content, Card, CardItem,  Body,  Text, Button, Icon} from 'native-base';
import {WebView} from 'react-native-webview';
import { withNavigation } from 'react-navigation';
 class Map extends Component {
    render(){
        return(
            <WebView
            source={{uri:'https://www.google.com.eg/maps/search/'+this.props.navigation.getParam('title')}}
         />
        )
    }}
    export default withNavigation(Map)