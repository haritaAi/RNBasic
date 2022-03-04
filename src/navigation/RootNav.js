// In App.js in a new project

import React  from 'react';
import { View, Text,SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
import Main from '../screens/Main'
import FinalFoodList from '../screens/FinalFoodList';


const RootNav = () =>  {
  return (
    
      <Stack.Navigator initialRouteName='Food List' screenOptions={{
        headerStyle:{          
            shadowColor: "#000",
            shadowOffset:{
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,        
            
        }
      }} >
        <Stack.Screen name="Food List" component={Main} options = {{
          //  hederShown : false
        
        }} />
        <Stack.Screen name = "Final Food List" component={FinalFoodList} />
        
      </Stack.Navigator>
     
    
  );
}



//make this component available to the app
export default RootNav;
