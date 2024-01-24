import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputField from "../../components/commons/forms/InputFleid";
import SelectBox from "../../components/commons/forms/SelectBox";
import { useState } from "react";

const DefaultInfoScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <SelectBox
        selectedValue={selectedGender}
        onValueChange={(value) => setSelectedGender(value)}
        items={[
          { label: "남성", value: "남성" },
          { label: "여성", value: "여성" },
        ]}
      />
      <InputField placeholder="나이를 입력해주세요." />
      <InputField placeholder="몸무게를 입력해주세요." /><Text>kg</Text>
      <InputField placeholder="키를 입력해주세요." /><Text>cm</Text>
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
