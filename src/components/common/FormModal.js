import React from "react";
import { Modal as RNModal, View, StyleSheet } from "react-native";

const FormModal = ({ children, visible, onRequestClose }) => {
  return (
    <RNModal
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalView}>{children}</View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default FormModal;
