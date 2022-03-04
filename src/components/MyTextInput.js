//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet ,TextInput} from 'react-native';
import Colors from '../layout/colors'

// create a component
const MyTextInput = ({placeHolder ,value, title ,keyboardType, onChangeText}) => {

    
    return (
        <View  style = {styles.container}>
            
           <Text style = {{paddingBottom : 10, fontSize : 16}}>{title}</Text>
            <TextInput style={styles.input} 
                       onChangeText={onChangeText} 
                       value={value}
                       keyboardType = {keyboardType}
                       placeholder = {placeHolder}
                       />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container : {
        marginVertical :10,
    },
    input: {
        height: 50,      
        borderWidth: 1,
        padding: 15,
        borderRadius : 7,
        fontSize : 16,
        
        borderColor : Colors.mediumGray,
      },
});

//make this component available to the app
export default MyTextInput;
