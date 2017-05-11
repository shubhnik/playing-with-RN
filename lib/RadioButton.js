/**
 * Created by chicmic on 11/05/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
TouchableOpacity
} from 'react-native';

export default class CBcontainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectedItem : null
        }
    }

    changeSelectedItem(index) {
        this.setState({selectedItem:index})
    }

    render(){
        return(
            <View>
                {
                    React.Children.map(this.props.children , (element,index)=>{
                         return (
                             <TouchableOpacity
                                 style={{flexDirection:'row',backgroundColor:this.props.itemContainerColor}}
                                 key={index}
                                 onPress={this.changeSelectedItem.bind(this,index)}
                                 activeOpacity={1}
                             >
                                 <View style={{flex:this.props.contentToIconRatio}} >{element}</View>
                                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >{this.state.selectedItem == index ? <Text style={{fontSize:this.props.iconSize,color:this.props.iconColor}}>✓</Text> : null}</View>
                             </TouchableOpacity>
                         )
                    })
                }
            </View>
        )
    }
}