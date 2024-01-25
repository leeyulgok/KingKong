import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const InputField = ({ placeholder, value, onChangeText, ...rest }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default InputField;
