import React, { useCallback } from 'react';
import {
	ImageBackground,
	View,
	Text,
	Image,
	SafeAreaView,
	StatusBar,
	ScrollView,
	Button,
} from 'react-native';
import style from '../styles/HomeScreen.css';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function HomeScreen(props, { navigation }) {
	const [fontsLoaded] = useFonts({
		Itim: require('../fonts/Itim-Regular.ttf'),
		Javanese: require('../fonts/Javanese-Text.ttf'),
		Inter: require('../fonts/Inter-Regular.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={{ paddingTap: StatusBar.currentHeight, flex: 1 }}>
			<View style={style.homeContainer}>
				<ImageBackground
					style={style.logo}
					source={require('../assets/mineolaUFSD.png')}
				></ImageBackground>
				<Text style={style.titleText}>Home</Text>

				<ScrollView style={style.homeContentContainer}>
					<View style={style.homeContentBlock}>
						<Text style={style.homeContentHeading}>
							Mustang Pride
						</Text>
						<Image
							style={style.homeContentImage}
							source={require('../assets/homeContent1.png')}
						></Image>
						<Text style={style.homeContentBlurb}>
							Learn how to become part of our “Homecoming” parade
							10/15/22...
						</Text>
					</View>

					<View style={style.homeContentBlock}>
						<Text style={style.homeContentHeading}>
							Apple Distinguished Schools
						</Text>
						<Image
							style={style.homeContentImage}
							source={require('../assets/homeContent2.png')}
						></Image>
						<Text style={style.homeContentBlurb}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</Text>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default HomeScreen;
