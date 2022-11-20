import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./app/screens/HomeScreen.js";
import NewsScreen from "./app/screens/NewsScreen.js";
import CalendarScreen from "./app/screens/CalendarScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";

export default function App() {

	return (
		<HomeScreen />
		// <NewsScreen />
	);
}