import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import ApiCalendar from 'react-google-calendar-api';
import ical from 'cal-parser';
import {
	ImageBackground,
	View,
	Text,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { Button } from 'react-native-paper';
import style from '../styles/CalendarScreen.css';

function CalendarScreen(props) {
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

	const config = {
		clientId: '102893772546475477498',
		apiKey: 'AIzaSyDD6kqYQwlhoAi92AS7rwH7JQ7FCaBYLgs',
		scope: 'https://www.googleapis.com/auth/calendar',
		discoveryDocs: [
			'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
		],
	};
	const apiCalendar = new ApiCalendar(config);
	apiCalendar.setCalendar(
		'rmhebbtdcimhh1086klqla55hs@group.calendar.google.com'
	);

	const fileUrl = new URL(
		'https://calendar.google.com/calendar/ical/rmhebbtdcimhh1086klqla55hs%40group.calendar.google.com/public/basic.ics'
	);
	// const myCalendarString = fs.readFileSync(fileUrl, "utf8");
	// const parsed = ical.parseString(fr.result);
	// console.log(parsed.calendarData);

	return (
		<SafeAreaView style={{ paddingTap: StatusBar.currentHeight, flex: 1 }}>
			<View style={style.calendarContainer}>
				<ImageBackground
					style={style.logo}
					source={require('../assets/mineolaUFSD.png')}
				></ImageBackground>
				<Text style={style.titleText}>Calendar</Text>
				<View style={style.calendarButtonContainer}>
					<Button uppercase={false} style={style.calendarButton}>
						<Text style={style.calendarButtonText}>
							Main Schedule
						</Text>
					</Button>
					<Button uppercase={false} style={style.calendarButton}>
						<Text style={style.calendarButtonText}>
							My Schedule
						</Text>
					</Button>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default CalendarScreen;
