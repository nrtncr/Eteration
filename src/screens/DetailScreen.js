import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '~/utils/Colors/Colors';

const {width,height} = Dimensions.get('window');

function DetailScreen(props) {
    const item  =  props.route.params.item
    console.log("params",item)
  return (
    <View style={styles.detailView}>
        <Image source={{uri:item.avatar}} style={styles.detailAvatar}  />
        <Text style={styles.detailName}>{item.name}</Text>
        <Text style={styles.detailJob}>{item.job}</Text>
        <Text style={styles.detailDescription}>{item.description}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    detailView:{
        flex:1,
        backgroundColor:colors.darkgray,
        paddingHorizontal:15,
        paddingTop:20,
        alignItems:'center'
    },
    detailAvatar:{
        width:width*0.35,
        height:height*0.35,
        marginBottom:10
    },
    detailName:{
        fontSize:21,
        fontWeight:'500',
        color:colors.black
    },
    detailJob:{
        fontSize:15,
        fontWeight:'500',
        color:colors.gray,
        marginBottom:15
    },
    detailDescription:{
        fontSize:14,
        fontWeight:'400',
        color:colors.gray
    }
})

export default DetailScreen