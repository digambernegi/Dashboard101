import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

function ThemeSetting() {
  const {
    currentMode,
    currentColor,
    setThemeSetting,
    handleTheme,
  } = useStateContext();
  return (
    <div className="fixed bg-half-transparent w-screen top-0 right-0">
      <div className="h-screen w-400 float-right dark:text-gray-200 bg-white dark:[#484B52]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSetting(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 borde-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              className="cursor-pointer"
              name="theme"
              value="light"
              onChange={handleTheme}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="text-md ml-2 cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              className="cursor-pointer"
              name="theme"
              value="dark"
              onChange={handleTheme}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="text-md ml-2 cursor-pointer">
              Dark
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSetting;
