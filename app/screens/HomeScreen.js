import React, { useState } from "react";
import { useCallback } from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import style from "../styles/HomeScreen.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function HomeScreen(props) {
  const [fontsLoaded] = useFonts({
    Itim: require("../fonts/Itim-Regular.ttf"),
    Javanese: require("../fonts/Javanese-Text.ttf"),
    Inter: require("../fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={style.container}>
      <ImageBackground
        style={style.logo}
        source={require("../assets/mineolaUFSD.png")}
      ></ImageBackground>
      <Text style={style.titleText}>Home</Text>

      <Text style={style.subheading}>Mustang Pride</Text>
      <Image
        style={style.newsImage}
        source={require("../assets/news1.png")}
      ></Image>
      <Text style={style.newsBlurb}>
        Learn how to become part of our “Homecoming” parade 10/15/22...
      </Text>

    </View>
  );
}

export default HomeScreen;
