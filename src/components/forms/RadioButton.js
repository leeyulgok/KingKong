import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => onSelect(option.value)}
        >
          <View
            style={[
              styles.outerCircle,
              selectedOption === option.value && styles.selectedOuterCircle,
            ]}
          >
            {selectedOption === option.value && (
              <View style={styles.innerCircle} />
            )}
          </View>
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedOuterCircle: {
    borderColor: "blue",
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  label: {
    marginLeft: 10,
  },
});

export default RadioButton;
