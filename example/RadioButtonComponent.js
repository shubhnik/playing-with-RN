/**
 * Created by chicmic on 11/05/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import RadioButton from './lib/RadioButton'

export default class CBcomponent extends Component{
    render(){
        return(
            <ScrollView contentContainerStyle={{flex:1,paddingTop:20}} >
                <RadioButton contentToIconRatio={7} iconColor="rgb(0,133,248)" iconSize={20} itemContainerColor="white">
                    <View style={Styles.ItemContainerStyle}><Text>Option 1</Text></View>
                    <View style={Styles.ItemContainerStyle}><Text>Option 2</Text></View>
                    <View style={Styles.ItemContainerStyle}><Text>Option 3</Text></View>
                    <View style={Styles.ItemContainerStyle}><Text>Option 4</Text></View>
                    <View style={Styles.ItemContainerStyle}><Text>Option 5</Text></View>
                </RadioButton>
            </ScrollView>
        )
    }
}

const Styles = StyleSheet.create({
    ItemContainerStyle:{
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'rgb(219,219,224)',
        justifyContent:'center',
        paddingLeft:5
    }
})