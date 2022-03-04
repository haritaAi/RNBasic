//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

import Colors from '../layout/colors';
// create a component
const Button = ({title , onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress = {onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth :1,
        borderColor : Colors.border_active,        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : Colors.border_active,
        borderRadius : 10,  
        flexDirection :'row',
        minHeight : 50,
        paddingHorizontal :10,
    },
    text :{
        color:Colors.WHITE,
        fontSize:16,
        fontWeight :'600',
    }
});

//make this component available to the app
export default Button;
