import AuthNavigator from "./app/navigations/auth/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodeSansBold: require("./assets/fonts/Inter-Bold.ttf"),
    EncodeSansMedium: require("./assets/fonts/Inter-Medium.ttf"),
    EncodeSansRegular: require("./assets/fonts/Inter-Regular.ttf"),
    EncodeSansLight: require("./assets/fonts/Inter-Light.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    EncodeSansThin: require("./assets/fonts/Inter-Thin.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
