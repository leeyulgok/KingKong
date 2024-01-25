import InputField from "../../components/forms/InputField"
import SelectBox from "../../components/forms/SelectBox";

export default function fieldComposition(type, fieldProps) {
  let ComponentToRender = null;
  if (type === "input") {
    ComponentToRender = <InputField {...fieldProps} />;
  } else if (type === "selectBox") {
    ComponentToRender = <SelectBox {...fieldProps} />;
  }

  return ComponentToRender;
}
