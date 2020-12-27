import React from 'react';
import { View, StyleSheet } from 'react-native';
import {colors} from './colors';

const Card = props => {
  return (
    <View style={{...styles.card,...props.style}}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card:{
    // flexDirection:'row',
    // justifyContent:'space-between',
    // alignItems:'center',
    backgroundColor:colors.white,
    paddingHorizontal:16,
    paddingVertical:15,
    borderRadius:10,
    elevation:5,
  },
});

