import React from "react";
import { useCallback } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useFonts } from "expo-font";
import { Button, TextInput } from "react-native-paper";
import style from "../styles/LoginScreen.css";
import * as SplashScreen from "expo-splash-screen";

function LoginScreen(props) {
  const [fontsLoaded] = useFonts({
    Itim: require("../fonts/Itim-Regular.ttf"),
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
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
      <View style={style.container}>
        <ImageBackground
          style={style.logo}
          source={require("../assets/mineolaUFSD.png")}
        ></ImageBackground>

        <Text style={style.text}>Please use your workspace login.</Text>

        <TextInput style={style.textInput1} placeholder="Email" />
        <TextInput
          style={style.textInput2}
          placeholder="Password"
          secureTextEntry={true}
        />

        <View style={style.buttonContainer}>
          <Button style={style.button1} uppercase={false}>
            <Text style={style.buttonText}>Login</Text>
          </Button>
          <Button style={style.button2} uppercase={false}>
            <Text style={style.buttonText}>Sign Up</Text>
          </Button>
          <Button style={style.button3} uppercase={false}>
            <Text style={style.buttonText}>I'm a parent</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
