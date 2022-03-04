//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

import Colors  from '../layout/colors'
// create a component
const FinalFoodList = ({navigation,route}) => {

   const {data} = route.params 
 
    return (
        <View style={styles.container}>
            <View style = {styles.dataContainer}>
             {data?.length>0 && 
                      <View>
                    <Text style = {{fontSize : 18}}>[
                         {data.map(item =><Text style = {{fontSize : 18}}>{'{ \n'+    
                                                                                   `        name :    ${JSON.stringify(item.name)}` + ', \n'+  
                                                                                   `        price :   ${JSON.stringify(item.price)}` + '\n }'+ ' ,'}</Text> )}
                   ]</Text>
             </View>
             }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND,
    },
    dataContainer :{
        flex:1,
        borderRadius :15,
        backgroundColor : Colors.BG_SECONDARY,
        width:'85%',
        margin : 20,
        padding:20,
    }
});

//make this component available to the app
export default FinalFoodList;
