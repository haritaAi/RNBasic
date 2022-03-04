//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Dimensions,
    TouchableOpacity} from 'react-native';


import Colors  from '../layout/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';


const Height = Dimensions.get('window').height;
const Width  =  Dimensions.get('window').width;



// create a component
const Item = ({foodItem,price ,id,onDelete,onEdit,onPressScroll,isActive}) => {


    return (
        <View style={[styles.itemContainer,{backgroundColor :  isActive===id ? Colors.BG_ACTIVE : Colors.BG_SECONDARY , 
                                            borderColor : isActive===id ?  Colors.border_active : Colors.Border_SECONDARY         }]}>   
        <View style = {styles.itemDetail}>  
             <View style = {styles.title}>   
             <TouchableOpacity onLongPress={onPressScroll}>    
                <MaterialIcons name="drag-indicator" size={24} color={Colors.Border_SECONDARY} />
                </TouchableOpacity>
                <Text style = {styles.item}>{foodItem}</Text>
            </View>
            <View style = {styles.priceTag}>
                 {/* <Text>{id}</Text> */}
                 <Text style = {styles.price}>Price:</Text>  
                 <Text style = {styles.item}>{'\u20B9'}{' '}{price}</Text>
            </View>
        </View>
        
        <View style = {styles.actionButtons}>
            <TouchableOpacity style = {styles.actionIcon} onPress = {()=>onEdit({name : foodItem,price,id})}>
            <Feather name="edit-2" size={24} color={Colors.mediumGray} />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.actionIcon} onPress = {()=>onDelete({foodItem,price,id})}>
            <Feather name="trash" size={24} color={Colors.mediumGray} />   
            </TouchableOpacity>
        </View>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    itemContainer: {
        borderWidth :1,
        borderColor : Colors.Border_SECONDARY,        
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor : Colors.BG_SECONDARY,
        borderRadius : 7,
        width : '100%',  
        flexDirection :'row',
        marginVertical : 10,
    
    
    },
    itemDetail : {
        flexGrow :2,
        flexDirection :'row',
        justifyContent:'space-between',
        padding :7,
        
    },
    title : {
        flexDirection :'row',
        alignItems : 'center',
    }, 
    actionButtons :{
        flexDirection :'row',   
        flexGrow : 1,
        alignItems : 'center',
        borderLeftColor : Colors.Border_SECONDARY,
        borderLeftWidth :1,
        justifyContent :'space-evenly',
        padding : 7,
    
    },
    actionIcon : {
        padding: 7,
        alignItems:'center',
        justifyContent :'center',
        // borderWidth :1,
    },
    item : {      

        fontSize : 16,
        fontWeight :'600',      
        alignItems : 'center',
        paddingHorizontal : 10,
    },   
    priceTag:{
        flexDirection :'row',
        alignItems :'center'
    },
    price :{
        color : Colors.Border_SECONDARY,
        fontSize : 16,
    }
});

//make this component available to the app
export default Item;
