import React, { useState } from "react";
import { useCallback } from "react";
import { ImageBackground, View, Text, Image, SafeAreaView, StatusBar, ScrollView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from "../styles/HomeScreen.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function HomeScreen(props, {navigation}) {
	// const [fontsLoaded] = useFonts({
	//   Itim: require("../fonts/Itim-Regular.ttf"),
	//   Javanese: require("../fonts/Javanese-Text.ttf"),
	//   Inter: require("../fonts/Inter-Regular.ttf"),
	// });

	// const onLayoutRootView = useCallback(async () => {
	//   if (fontsLoaded) {
	//     await SplashScreen.hideAsync();
	//   }
	// }, [fontsLoaded]);

	// if (!fontsLoaded) {
	//   return null;
	// }

  // const Stack = createNativeStackNavigator();

	return (
      <SafeAreaView style={{ paddingTap: StatusBar.currentHeight, flex: 1 }}>
        <View style={style.homeContainer}>
          <ImageBackground
            style={style.logo}
            source={require("../assets/mineolaUFSD.png")}
          ></ImageBackground>
          <Text style={style.titleText}>Home</Text>

          <ScrollView style={style.newsContainer}>
            <View style={style.newsBlock}>
              <Text style={style.newsHeading}>Mustang Pride</Text>
              <Image
                style={style.newsImage}
                source={require("../assets/news1.png")}
              ></Image>
              <Text style={style.newsBlurb}>
                Learn how to become part of our “Homecoming” parade
                10/15/22...
              </Text>
            </View>

            <View style={style.homeBlock}>
              <Text style={style.newsHeading}>
                Apple Distinguished Schools
              </Text>
              <Image
                style={style.newsImage}
                source={require("../assets/news2.png")}
              ></Image>
              <Text style={style.newsBlurb}>
                Lorem Ipsum
                10/15/22...
              </Text>
            </View>
          </ScrollView>
          
        </View>
        <Button title="Button" onPress={() => {navigation.navigate('News')}} />
      </SafeAreaView>
	);
}

export default HomeScreen;
