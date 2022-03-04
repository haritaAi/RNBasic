//import liraries
import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet,Modal,Pressable,
         TouchableOpacity,TextInput ,Dimensions,TouchableWithoutFeedback, Keyboard} from 'react-native';

import Colors from '../layout/colors'
import { Feather } from '@expo/vector-icons';
import MyTextInput from './MyTextInput';
import Button from './Button';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
// create a component
const ModalForm = ({onClose,onSubmit,item,onEdit}) => {
    
    const [text, onChangeText] = useState('Food Item Name');
    const [name,setName] = useState(item? item.name:'')
    const [price,setPrice] = useState(item? item.price : '')
    const [id,setId] = useState(item? item.id : '')

// useEffect(()=> {
//     if(item){
//         // setName(item.name)
//         setPrice(item.price)
//         setId(item.id)
//     }
// },[])
   
    return (
       <TouchableWithoutFeedback  onPress = {() => Keyboard.dismiss()}>
           <View style = {styles.formContainer}>
           <View style = {styles.headerContainer}>
               <Text style = {styles.header} >{item ? 'Update' : 'Add'} Food Item</Text>
               
               <TouchableOpacity onPress = {onClose}>
                  <Feather name="x" size={24} color={Colors.mediumGray} />
               </TouchableOpacity>    
           </View>
           <MyTextInput title = 'Food Name' value = {name} onChangeText={setName} keyboardType = 'default' />
            <MyTextInput title = 'Price'    value = {price} onChangeText={setPrice} keyboardType = 'numeric'  />
            <Button title = {item? 'Update Food Item' : 'Add Food Item'}  onPress = {()=> { 
                                                               if(item){
                                                                   onEdit({name,price,id})
                                                               }
                                                               else {
                                                                   onSubmit({name,price})
                                                               }
                                                            }}
                                                            />
      </View>
       </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    formContainer : {
        flex:1,
        backgroundColor : Colors.BACKGROUND,
        padding : 30,
        borderRadius:30,
        position:'absolute',
        height : Height/1.8,
        width : Width,
        bottom : 0,
    },
    headerContainer : {
        flexDirection :'row',
        justifyContent: 'space-between',
        height : 50,
    },
    header : {
        
        fontSize : 18,
        fontWeight :'500',
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
export default ModalForm;
