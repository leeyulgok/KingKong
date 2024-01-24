import React from "react";
import Container from "./Container";
import Field from "./Field";
import fieldComposition from "../../../utils/forms/fieldComposition";
import { Text, View, StyleSheet } from "react-native";

const FormContainer = ({ label, type, fieldProps, unit }) => {
  const ComponentToRender = fieldComposition(type, fieldProps);

  return (
    <Container>
      <Field label={label}>
        <View style={styles.container}>
          {ComponentToRender}
          {unit && <Text style={styles.unit}>{unit}</Text>}
        </View>
      </Field>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: "5px",
  },
  unit: {
    alignSelf: "flex-end",
  }
});

export default FormContainer;
