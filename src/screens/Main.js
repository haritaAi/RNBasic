//import liraries
import React, {useState,useEffect,useRef} from 'react';
import { View, Text, StyleSheet ,
          FlatList,SafeAreaView,Modal,TextInput,
           Pressable,Dimensions,ScrollView,TouchableOpacity,
          Animated,PanResponder} from 'react-native';

import Colors from '../layout/colors'
import Item from '../components/Item';
import shortid from 'shortid';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

import AddFoodItem from '../components/AddFoodItem';
import Button from '../components/Button'
import Divider from '../components/Divider';
import ModalForm from '../components/ModalView';

// create a component
const initialData = [
    {id : shortid.generate(),name : 'Banana',price : '100'},
    {id : shortid.generate() ,name : 'Apple',price : '20'},
 
];

const Main = ({navigation}) => {

    const [modalVisible,SetModalVisible] = useState(false)
    const [text, onChangeText] = useState('Food Item Name');
    const [data,setData] = useState(initialData)
    const [editItem,setEditItem] = useState(null)
    const [active,setActive] = useState(null)
  const scrollY = React.useRef(new Animated.Value(0)).current
    const pan = useRef(new Animated.ValueXY()).current;
    
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder:() => true,
        onPanResponderGrant : () => {
             pan.setOffset({
                 x : 0,
                 y : pan.y
             })
        },
        onPanResponderMove :Animated.event([null,{
            dx:0,
            dy:pan.y
        }]),
        onPanResponderRelease : () => {
           Animated.setOffset(
               pan,
               {toValue : {x:0,y : pan.y}}
           ).start();
        }
    });

const handleSubmit = ({name,price}) => {
   
    setData([...data,{name,price,id: shortid.generate()}])
    SetModalVisible(false)
}

const handleEdit = item => {    
     
     data.map(it =>{
        if(it.id === item.id){
             it.name = item.name,
             it.price = item.price
        }
     }) 
     setEditItem(null)
     SetModalVisible(!modalVisible)
    
}

const handleDelete = itemDelete => {
   
    
    if(data?.length>0){
         const newData =  data.filter(item => item.id !== itemDelete.id )
         setData(newData)
    }
}

const handleScroll = item => {

}
    return (
        <SafeAreaView style ={styles.container}>
            <Modal animationType='Slide'
                   transparent = {true}
                   visible = {modalVisible}
                   onRequestClose = {() =>{ 
                   setEditItem(null)    
                    SetModalVisible(!modalVisible)     
                   }} 
                    >
               <View style = {styles.modalContainer}>
                   <Pressable style = {styles.modalBackground}
                         onPress = {() =>{
                                     setEditItem(null) 
                                     SetModalVisible(!modalVisible)
                         } }>                       
                                              
                   </Pressable>
                   <View >
                        <ModalForm onClose = {() =>{
                                                      setEditItem(null)
                                                      SetModalVisible(!modalVisible)
                                                   } } 
                                   onSubmit = {handleSubmit}
                                   onEdit = {handleEdit}
                                   item = {editItem} 
                                    />
                   </View>
               </View>
            </Modal>
            {data?.length >0 &&  <ScrollView style = {styles.listContainer}>
                 {data.map((item,index) => <View >                      
                                                         <TouchableOpacity  onLongPress={()=>{                                                                                            
                                                                                              setActive(item.id)    
                                                                                              }}
                                                                            onPress = {() => {
                                                                                if(active === item.id)  
                                                                                setActive(null)
                                                                            }}  >   
                                                          <Item  foodItem = {item.name} 
                                                             price = {item.price} 
                                                             id = {item.id}
                                                             onEdit = {()=>{
                                                                 setEditItem(item)
                                                                 SetModalVisible(!modalVisible)
                                                             }}
                                                              isActive = {active}
                                                              onDelete = {handleDelete} 
                                                              onPressScroll = {handleScroll}
                                                                />
                                                             </TouchableOpacity>
                                                             </View>
                                                             )}
                  {/* <FlatList data = {data}
                                   
                            renderItem = {({item,index}) => {    
                                                       
                                             
                                               return  <Animated.View 
                                                        //    onScroll = {Animated.event(
                                                        //      [{nativeEvent : {contentOffset : {y : scrollY}}}],
                                                        //      {useNativeDriver : true}
                                                        //  )}        
                                                           {...panResponder.panHandlers}  
                                                            style = {{
                                                                transform : [{
                                                                       translateX : 0
                                                                }, {
                                                                     translateY : pan.y
                                                                 }]
                                                            }}
                                                          >                      
                                                         <TouchableOpacity  onLongPress={()=>{
                                                                                             
                                                                                              setActive(item.id)    
                                                                                              }}
                                                                            onPress = {() => {
                                                                                if(active === item.id)  
                                                                                setActive(null)
                                                                            }}                  
                                                                                                   >   
                                                          <Item  foodItem = {item.name} 
                                                             price = {item.price} 
                                                             id = {item.id}
                                                             onEdit = {()=>{
                                                                 setEditItem(item)
                                                                 SetModalVisible(!modalVisible)
                                                             }}
                                                              isActive = {active}
                                                              onDelete = {handleDelete} 
                                                              onPressScroll = {handleScroll}
                                                                />
                                                             </TouchableOpacity>
                                                             </Animated.View>
                                                                 }
                                                                }
                             keyExtractor = {item => item.id}                                
                                />   */}



                                     
                                                                    
            </ScrollView> }
          
           <View style = {styles.bottomContainer} >               
              
                    <AddFoodItem  onPress = {()=>SetModalVisible(!modalVisible)} />
                <View style = {styles.button}>
                   <Button title = 'Final Food list' onPress = {()=>navigation.navigate("Final Food List",{data}) }/>
                </View>
           </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems : 'center',
        paddingVertical :20,
        backgroundColor : Colors.BACKGROUND,
        
    },
    listContainer :{    
        flexBasis:100,
        flexGrow : 2,
       marginHorizontal :20,
        paddingVertical :10,
    },
    bottomContainer :{
        flexBasis :100,
        flexGrow :1,
        // flexShrink : 0.6,
        paddingVertical :10,
        width : '100%',
        position : 'relative',
        paddingHorizontal :'5%',
        backgroundColor :'#fff',
        alignItems :'center',
        // position :'absolute', 
        // bottom : 40,
    },
    modalContainer :{
        flex:1,    
        position : 'relative',
      },
      modalBackground : {
          flex:1,
          backgroundColor: '#000',
          opacity : 0.5,
               
          
      },
      formContainer : {
          flex:1,
          backgroundColor : Colors.BACKGROUND,
          padding : 20,
          borderRadius:30,
          position:'absolute',
          height : Height/1.8,
          width : Width,
          bottom : 0,
      },
    text : {

    },
    button : {                 
         position : 'absolute',
         bottom : 40,
         width :'100%',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius : 7,
        fontSize : 16,
        
        borderColor : Colors.mediumGray,
      },
});

//make this component available to the app
export default Main;
