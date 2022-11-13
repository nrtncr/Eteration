import { StyleSheet, Text } from 'react-native'

import AddCharacterScreen from '~/screens/AddCharacterScreen'
import DetailScreen from '~/screens/DetailScreen'
import ListScreen from '~/screens/ListScreen'
import React from 'react'
import colors from '~/utils/Colors/Colors'
import { createStackNavigator } from '@react-navigation/stack'
import {screenNames} from '~config/stackScreenNames'

const StackApp =  createStackNavigator()
function Stack() {
  return (
    <StackApp.Navigator>

        <StackApp.Screen
            name = {screenNames.listScreen}
            component= {ListScreen}
            options= {{
               headerShown:true,
               title:"Simpsons",
               headerTitleAlign:'center',
               headerTitleStyle:{fontWeight:'600',fontSize:15,color:colors.black},               
            }}
        />
        <StackApp.Screen
            name = {screenNames.detailScreen}
            component= {DetailScreen}
            options= {{
               headerShown:true,
               title:"Details",
               headerTitleAlign:'center',
               headerTitleStyle:styles.headerTitleStyle, 
               headerBackTitleStyle:styles.headerLeft,
               headerBackTitle:"Simpsons",
               headerBackTitleVisible:'true',
               headerTintColor:colors.blue

            }}
        />

        <StackApp.Screen
            name = {screenNames.addCharacterScreen}
            component= {AddCharacterScreen}
            options= {{
                headerShown:true,
                title:"Add New Character",
                headerTitleAlign:'center',
                headerTitleStyle:styles.headerTitleStyle, 
                headerBackTitleStyle:styles.headerLeft,
                headerBackTitle:"Simpsons",
                headerBackTitleVisible:'true',
                headerTintColor:colors.blue

            }}
        />
       
    </StackApp.Navigator>
  )
}

const styles = StyleSheet.create({
    headerTitleStyle:{fontWeight:'600',fontSize:15,color:'black'},
    headerLeft:{
        fontWeight:'500',
        fontSize:14,
        color: colors.blue
    }
})

export default Stack;