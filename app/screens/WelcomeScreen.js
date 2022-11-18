import React from "react";
import { ImageBackground, StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import style from "../styles/WelcomeScreen.css";

function WelcomeScreen(props) {
	return (
		<SafeAreaView style={{paddingTop: StatusBar.currentHeight, flex: 1}}>
			<View style={style.logoContainer}>
				<ImageBackground
					style={style.logo}
					source={require("../assets/mineolaUFSD.png")}
				></ImageBackground>
			</View>
		</SafeAreaView>
	);
}

export default WelcomeScreen;
