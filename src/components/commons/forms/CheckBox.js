import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && <View style={styles.innerBox} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  box: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    borderColor: "blue",
  },
  innerBox: {
    height: 12,
    width: 12,
    backgroundColor: "blue",
  },
  label: {
    marginLeft: 10,
  },
});

export default CheckBox;
