import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from "react-native";

function LoginScreen(props) {
    return (
     <View style={styles.logoContainer}>
        <ImageBackground
          style={styles.logo}
          source={require("../assets/mineolaUFSD.png")}
        ></ImageBackground>

        <Text style={styles.text}>Please use your workspace login.</Text>
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
        top: "20%",
        alignItems: "center",
    },
    text: {
        position: "relative",
        top: "40%",
    }
})
export default LoginScreen;