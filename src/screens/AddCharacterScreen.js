import * as simpsonsActions from '../redux/actions/simpsonsActions'

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import { Formik } from 'formik';
import colors from '~/utils/Colors/Colors';
import { connect } from 'react-redux';

const {width, height} = Dimensions.get('window');

function AddCharacterScreen(props) {

  const addCharacter = props.add;
  return (
    <Formik
      initialValues={{name:' ', job: ' ', description:' ', avatar:' '}}
      onSubmit={values => addCharacter(values)}
    >
  {({handleChange,handleSubmit,values})=>(    
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Name Surname:</Text>
      <TextInput style={styles.input} value={values.name} onChangeText={handleChange('name')} />
      <Text style={styles.inputTitle}>Job Title:</Text>
      <TextInput style={styles.input} value={values.job} onChangeText={handleChange('job')} />
      <Text style={styles.inputTitle}>About Him/Her:</Text>
      <TextInput multiline={true} numberOfLines={3} style={[styles.input,{height:100,textAlignVertical:'top'}]} value={values.about} onChangeText={handleChange('description')} />
      <Text style={styles.inputTitle}>Image Link:</Text>
      <TextInput style={styles.input} value={values.avatar} onChangeText={handleChange('avatar')} />
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Character</Text>
      </TouchableOpacity>
    </View>
  )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputTitle: {
    color: colors.black,
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    width: width * 0.94,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginBottom: 10,
    borderWidth:1,
    borderColor:colors.lightGray
  },
  addButton: {
    width: width * 0.94,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
  },
});

const mapDispatchToProps = (dispatch)=>{
  return{
    add: (character) => dispatch(simpsonsActions.addCharacter(character)),
 }
}
export default connect(null,mapDispatchToProps)(AddCharacterScreen);
