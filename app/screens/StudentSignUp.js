import React from "react";
import { ImageBackground, StyleSheet, View, SafeAreaView, StatusBar, Text } from "react-native";
import { Menu } from "react-native-paper";
import style from "../styles/StudentSignUp.css";
import { Dropdown } from 'react-native-element-dropdown';

const school = [
	{ label: "Hampton Street School", value: "hampton"},
	{ label: "Jackson Avenue School", value: "jackson"},
	{ label: "Meadow Drive School",  value: "meadow"},
	{ label: "Mineola Middle School", value: "middle"},
	{ label: "Mineola High School", value: "high"}
]
const occupation = [
	{ label: "Student", value: "student"},
	{ label: "Teacher", value: "teacher"},
	{ label: "Parent",  value: "parent"}
]

function StudentSignUp(props) {
	return (
		<SafeAreaView style={{paddingTop: StatusBar.currentHeight, flex: 1}}>
			<View style={style.container}>
                <ImageBackground
					style={style.logo}
					source={require("../assets/mineolaUFSD.png")}
				></ImageBackground>
                <View>
                    <Text>Please Select your school:</Text>
                    <Menu></Menu> 
                </View>
				<View>
                    <Text>Please type your name:</Text>
                    <Menu></Menu> 
                </View>
				<View>
                    <Text>I am a...</Text>
                    <Menu></Menu> 
                </View>
                <Text>Please Select your school:</Text>
                <Text>Please type your name:</Text>
                <Text>I am a...</Text>
			</View>
		</SafeAreaView>
	);
}

export default StudentSignUp;
