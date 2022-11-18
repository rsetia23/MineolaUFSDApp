import React from "react";
import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import style from "../styles/WelcomeScreen.css";

function WelcomeScreen(props) {
	return (
		<SafeAreaView style={AndroidSafeScreen}>
			<ImageBackground
				style={style.logo}
				source={require("../assets/mineolaUFSD.png")}
			></ImageBackground>
		</SafeAreaView>
	);
}

export default WelcomeScreen;
