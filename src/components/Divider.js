//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// create a component
const Divider = () => {
    return (
        <View style={styles.container}>
            <Text style ={{color :'#000'}}> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       width :'100%',
       height :10,
        marginVertical :10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default Divider;
