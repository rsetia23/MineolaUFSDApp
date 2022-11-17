import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/mineolaUFSD.png")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        height: 97,
        width: 300
    }
})
export default WelcomeScreen;
