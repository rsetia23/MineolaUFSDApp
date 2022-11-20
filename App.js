import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import StudentSignUp from "./app/screens/StudentSignUp";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
	return (
		// <WelcomeScreen />
		// <LoginScreen />
        <StudentSignUp />
	);
}
