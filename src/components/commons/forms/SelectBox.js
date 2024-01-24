import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';

const SelectBox = ({ selectedValue, onValueChange, items }) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue);
  const [modalVisible, setModalVisible] = useState(false);

  const handleValueChange = (itemValue) => {
    setSelectedItem(itemValue);
    onValueChange(itemValue);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text>{selectedItem || "Select an option"}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Picker
            selectedValue={selectedItem}
            onValueChange={handleValueChange}
            style={styles.picker}
          >
            {items.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  modalView: {
    marginTop: '50%',
    backgroundColor: 'white',
    padding: 20,
  },
  picker: {
    width: '100%',
  },
});

export default SelectBox;
