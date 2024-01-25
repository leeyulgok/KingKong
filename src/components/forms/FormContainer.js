import React from "react";
import Container from "./Container";
import Field from "./Field";
import fieldComposition from "../../utils/forms/fieldComposition"
import { Text, View, StyleSheet } from "react-native";

const FormContainer = ({ label, type, fieldProps, unit }) => {
  const ComponentToRender = fieldComposition(type, fieldProps);

  return (
    <Container>
      <Field label={label}>
        <View style={styles.container}>
          <View style={styles.fieldContainer}>
            {ComponentToRender}
          </View>
          {unit && <Text style={styles.unit}>{unit}</Text>}
        </View>
      </Field>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fieldContainer: {
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unit: {
    alignSelf: "flex-end",
    paddingBottom: 5
  }
});

export default FormContainer;
