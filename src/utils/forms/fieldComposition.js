import InputField from "../../components/commons/forms/InputField";
import SelectBox from "../../components/commons/forms/SelectBox";

export default function fieldComposition(type, fieldProps) {
  let ComponentToRender = null;
  if (type === "input") {
    ComponentToRender = <InputField {...fieldProps} />;
  } else if (type === "selectBox") {
    ComponentToRender = <SelectBox {...fieldProps} />;
  }

  return ComponentToRender;
}
