import React from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const handleChange = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
function ColorPicker() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallate</p>
            <ColorPickerComponent
              onClick={handleChange}
              id="inline-pallate"
              mode="Pallate"
              inline
              modeSwitcher={false}
              showButtons={false}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              onClick={handleChange}
              id="inline-pallate"
              mode="Picker"
              inline
              modeSwitcher={false}
              showButtons={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
