import AppNavigator from "./src/navigation/AppNavigator";
import { useState, useEffect } from "react";
import FormNavigator from "./src/navigation/FormNavigator";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      <FormNavigator />
    </NavigationContainer>
  );
}
