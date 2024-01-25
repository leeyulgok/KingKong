import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View, Modal, TouchableOpacity, Text } from "react-native";

const SelectBox = ({ selectedValue, onValueChange, items }) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue);
  const [modalVisible, setModalVisible] = useState(false);

  const confirmSelection = () => {
    onValueChange(selectedItem);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.selectBox}>
          <Text style={styles.buttonText}>{selectedItem}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedItem}
              onValueChange={(itemValue, index) => {
                if (index !== 0) {
                  setSelectedItem(itemValue);
                }
              }}
              style={styles.picker}
            >
              {items.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
            <TouchableOpacity
              onPress={confirmSelection}
              style={styles.confirmButton}
            >
              <Text style={styles.confirmText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pickerContainer: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 4,
    margin: 10,
  },
  confirmButton: {
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: "skyblue",
    borderRadius: 4,
  },
  confirmText: {
    color: "black",
  },
  button: {
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
  },
});

export default SelectBox;
