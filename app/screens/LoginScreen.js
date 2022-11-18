import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

import style from "../styles/LoginScreen.css";

function LoginScreen(props) {
	return (
		<View style={style.logoContainer}>
			<ImageBackground
				style={style.logo}
				source={require("../assets/mineolaUFSD.png")}
			></ImageBackground>

			<Text style={style.text}>Please use your workspace login.</Text>
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
	},
});
export default LoginScreen;
