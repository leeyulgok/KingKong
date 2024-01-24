import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Field = ({ label, children }) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Field;
