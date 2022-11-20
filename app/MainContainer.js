import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen.js';
import NewsScreen from './screens/NewsScreen.js';
import CalendarScreen from './screens/CalendarScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

// Screen Names
const HomeName = 'Home';
const NewsName = 'News';
const CalendarName = 'Calendar';
const ProfileName = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer(props) {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let rn = route.name;
						size = 35;

						if (rn === HomeName) {
							iconName = focused ? 'home' : 'home-outline';
						} else if (rn === NewsName) {
							iconName = focused
								? 'newspaper'
								: 'newspaper-outline';
						} else if (rn === CalendarName) {
							iconName = focused
								? 'calendar'
								: 'calendar-outline';
						} else if (rn === ProfileName) {
							iconName = focused ? 'person' : 'person-outline';
						}

						return (
							<Ionicons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
					tabBarActiveTintColor: 'white',
					tabBarInactiveTintColor: 'white',
                    tabBarShowLabel: false,
					tabBarLabelStyle: {
						// padding: 10,
						fontSize: 10,
                        float: "top"
					},
					tabBarStyle: {
						backgroundColor: "#d31245",
                        height: 60
                    }
				})}
                
			>
				<Tab.Screen name={HomeName} component={HomeScreen} />
				<Tab.Screen name={NewsName} component={NewsScreen} />
				<Tab.Screen name={CalendarName} component={CalendarScreen} />
				<Tab.Screen name={ProfileName} component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default MainContainer;
