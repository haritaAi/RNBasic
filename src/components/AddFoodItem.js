//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

import Colors  from '../layout/colors'
import { Feather } from '@expo/vector-icons';

import Button from './Button';

// create a component
const AddFoodItem = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress = {onPress} >
            <Feather name="plus" size={18} color={Colors.TEXTCOLOR} />
            <Text style = {styles.text}>Add Food Item</Text>
            
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth :1,
        borderColor : Colors.border_active,        
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor : Colors.BG_ACTIVE,
        borderRadius : 7,
        width : '100%',  
        flexDirection :'row',
        minHeight : 50,
        paddingHorizontal :10,
    },
    text :{
        paddingHorizontal : 10,
        fontWeight :'500',
        fontSize :16,
    },
});

//make this component available to the app
export default AddFoodItem;
