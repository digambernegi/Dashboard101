import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

//declare initial object state for multiple state
//initial state of navbar pages
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

//function takes children as props, declaring all state inside {block} and return it
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true); //toggle sidebar
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7"); //default sidebar link color
  const [currentMode, setCurrentMode] = useState("Light"); //modes
  const [themeSetting, setThemeSetting] = useState(true); //theme

  // component selection
  function handleClick(selected) {
    setIsClicked({ ...initialState, [selected]: true });
  }

  function handleTheme(e) {
    console.log(currentMode);
    setCurrentMode(e.target.value);
    localStorage.setItem("theme", e.target.value);
    // setThemeSetting(false);
  }
  // function handleColors(e) {
  //   setCurrentMode(e.target.value);
  //   localStorage.setItem("theme", e.target.value);
  // }

  return (
    //always return children inside <contextProvider> to access anything provided inside it value={Access-This-State: stateName}
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSetting,
        setThemeSetting,
        handleTheme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//access specific state using useStateContext.. for now returning all state declared inside it
export const useStateContext = () => useContext(StateContext);
