import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Field = ({ label, children }) => {
  return (
    <View style={styles.formControl}>
      <View style={styles.textBox}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    flexDirection: "row",
    gap: 5
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "17%"
  },
  label: {
    fontSize: 17,
    fontFamily: 'Roboto-Black',
  },
});

export default Field;
