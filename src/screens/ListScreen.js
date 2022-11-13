import * as simpsonsActions from '../redux/actions/simpsonsActions'

import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '~/utils/Colors/Colors';
import { connect } from 'react-redux';
import { getDataService } from '~/modules/services';
import { screenNames } from '~/config/stackScreenNames';

const {width,height} = Dimensions.get('window');

const ListScreen = (props)=> {

const [data,setData] = useState(props.characters);
const navigation = useNavigation();
const focused = useIsFocused();

const addList=props.addList;
const remove = props.remove;
const increase = props.increase;
const reduce = props.reduce;
const characters = props.characters;

  useEffect(()=>{
    getData();
  },[])
  
  const getData = async () =>{
    console.log(characters)
    if(characters){
      const response = await getDataService();
      console.log("gelen yanıt",response.data)
      setData(response.data)
      addList(response.data)
    }
    else{
      //setData(characters)

    }
  }
  const renderData = (item) =>{
    console.log("item...",item)
    return(
    <TouchableOpacity style={styles.dataView} onPress={()=>navigation.navigate(screenNames.detailScreen,{item:item.item})}>
    <View style={styles.dataInfoView}>
    <Text style={styles.dataNumber}>{item.index+1}</Text>
    <Image style={styles.dataImage} source={{uri:item.item.avatar}} />
    <Text style={styles.dataName}>{item.item.name}</Text>
    </View>
      
    <View style={styles.dataIconView}>
    <TouchableOpacity onPress={()=>increase(item)}>
    <Ionicons name='arrow-up-circle-outline' size={25} color={colors.red}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>reduce(item)}>
    <Ionicons name='arrow-down-circle-outline' size={25} color={colors.green}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>remove(item)}>
    <Ionicons name='trash-outline' size={25} color={colors.black}/>
    </TouchableOpacity>
    </View>
    </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={(item,index)=>renderData(item,index)}
      />
      <TouchableOpacity style={styles.plusButton} 
        onPress={()=>navigation.navigate(screenNames.addCharacterScreen)}
      >
        <AntDesign name='pluscircle' size={40} color={colors.blue}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    dataView:{
      flexDirection:'row',
      width:width,
      height:height*0.08,
      borderBottomColor:colors.lightGray,
      borderWidth:1,
      paddingHorizontal:15,
      paddingVertical:10,
      backgroundColor:'white',
      justifyContent:'space-between'
    },
    dataImage:{
        width:width*0.05,
        height:height*0.05,  
        marginHorizontal:10, 
    },
    dataNumber:{
      fontSize:15,
      fontWeight:'500',
      color:colors.black
    },
    dataName:{
      color:colors.black,
      fontWeight:'500',
      marginLeft:10
    },
    dataIconView:{
      flexDirection:'row',
      alignItems:'center',
    },
    dataInfoView:{
      flexDirection:'row',
      alignItems:'center',
    },
    plusButton:{
      position:'absolute',
      left:(width-40)*0.5,
      top:height*0.80
    }
  })

  const mapStateToProps = (state) =>{
    return {characters : state.simpsonsReducer};
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
      addList: (characters) => dispatch(simpsonsActions.addCharacters(characters)),
      remove: (character) => dispatch(simpsonsActions.removeCharacter(character)),
      increase: (character) => dispatch(simpsonsActions.increaseCharacter(character)),
      reduce: (character) => dispatch(simpsonsActions.reduceCharacter(character))
    };
  }


export default connect(mapStateToProps,mapDispatchToProps)(ListScreen)