import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

//internal imports
import { fetchFonts } from "./src/constants/fonts";
import Navigator from "./src/navigator";

//Reducer stuff
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./src/store/reducer";

//for perfomance optimization
enableScreens();

const rootReducer = combineReducers({
  meal: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        // remember to properly handle errors
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
