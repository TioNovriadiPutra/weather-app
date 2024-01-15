import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@routes/AppStack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

const AppNav = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("@assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("@assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("@assets/fonts/Montserrat-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
};

export default AppNav;
