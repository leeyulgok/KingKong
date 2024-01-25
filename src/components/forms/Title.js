import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    marginBottom: 10,
    fontFamily: 'Roboto-Black',
  },
});

export default Title;
