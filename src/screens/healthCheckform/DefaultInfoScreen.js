import { StyleSheet, View } from "react-native";
import FormContainer from "../../components/commons/forms/FormContainer";
import Title from "../../components/commons/forms/Title";
import { useState } from "react";

const DefaultInfoScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <Title title="기본정보" />
      <FormContainer
        label="성별"
        type="selectBox"
        fieldProps={{
          selectedValue: selectedGender, 
          onValueChange: setSelectedGender, 
          items: [
            { label: "남성", value: "남성" },
            { label: "여성", value: "여성" },
          ],
        }}
      />
      <FormContainer
        label="나이"
        type="input"
        fieldProps={{ placeholder: "나이를 입력해주세요." }}
      />
      <FormContainer
        label="몸무게"
        type="input"
        fieldProps={{ placeholder: "몸무게를 입력해주세요." }}
        unit="kg"
      />
      <FormContainer
        label="키"
        type="input"
        fieldProps={{ placeholder: "키를 입력해주세요." }}
        unit="cm"
      />
    </View>
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
