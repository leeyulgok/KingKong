import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FormContainer from "../../components/commons/forms/FormContainer";
import Title from "../../components/commons/forms/Title";
import { useState } from "react";
import FORM_INFO from "../../utils/constants/formInfo";

const DefaultInfoScreen = () => {
  const [selectedGender, setSelectedGender] = useState(FORM_INFO.DEFAULT_INFO_SCREEN_GENDER_MESSAGE);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Title title={FORM_INFO.DEFAULT_INFO_SCREEN_TITLE} />
        <View>
          <FormContainer
            label={FORM_INFO.DEFAULT_INFO_SCREEN_GENDER}
            type="selectBox"
            fieldProps={{
              selectedValue: selectedGender,
              onValueChange: setSelectedGender,
              items: [
                {
                  label: FORM_INFO.DEFAULT_INFO_SCREEN_GENDER_MESSAGE,
                  value: FORM_INFO.DEFAULT_INFO_SCREEN_GENDER_MESSAGE,
                },
                {
                  label: FORM_INFO.DEFAULT_INFO_SCREEN_MAN,
                  value: FORM_INFO.DEFAULT_INFO_SCREEN_MAN,
                },
                {
                  label: FORM_INFO.DEFAULT_INFO_SCREEN_WOMAN,
                  value: FORM_INFO.DEFAULT_INFO_SCREEN_WOMAN,
                },
              ],
            }}
          />
          <FormContainer
            label={FORM_INFO.DEFAULT_INFO_SCREEN_AGE}
            type="input"
            fieldProps={{
              placeholder: FORM_INFO.DEFAULT_INFO_SCREEN_AGE_MESSAGE,
            }}
          />
          <FormContainer
            label={FORM_INFO.DEFAULT_INFO_SCREEN_WEIGHT}
            type="input"
            fieldProps={{
              placeholder: FORM_INFO.DEFAULT_INFO_SCREEN_WEIGHT_MESSAGE,
            }}
            unit={FORM_INFO.DEFAULT_INFO_SCREEN_WEIGHT_UNIT}
          />
          <FormContainer
            label={FORM_INFO.DEFAULT_INFO_SCREEN_HEIGHT}
            type="input"
            fieldProps={{
              placeholder: FORM_INFO.DEFAULT_INFO_SCREEN_HEIGHT_MESSAGE,
            }}
            unit={FORM_INFO.DEFAULT_INFO_SCREEN_HEIGHT_UNIT}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DefaultInfoScreen;
