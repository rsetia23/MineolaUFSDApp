import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.logoContainer}>
      <ImageBackground
        style={styles.logo}
        source={require("../assets/mineolaUFSD.png")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 97,
    width: 300,
  },
  logoContainer: {
    position: "relative",
    top: "40%",
    alignItems: "center",
  },
});
export default WelcomeScreen;
