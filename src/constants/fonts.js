import * as Font from "expo-font";

export const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-light": require("../../assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
};
