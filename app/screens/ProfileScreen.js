import React, { useState } from 'react';
import {
	ImageBackground,
	View,
	Text,
	Image,
	SafeAreaView,
	StatusBar,
	ScrollView,
} from 'react-native';
import style from '../styles/ProfileScreen.css';

function ProfileScreen(props) {
	return (
		<SafeAreaView style={{ paddingTap: StatusBar.currentHeight, flex: 1 }}>
			<View style={style.profileContainer}>
				<ImageBackground
					style={style.logo}
					source={require('../assets/mineolaUFSD.png')}
				/>
				<Image
					style={style.profilePicture}
					source={require('../assets/pfp.png')}
				/>
				<Text style={style.profileName}>Nick Yokatis</Text>
				<Text style={style.profileOccupation}>Student</Text>
				<View style={style.profileAttributes}>
					<View style={style.profileAttributesSection}>
						<View style={style.profileAttributesSectionText}>
							<View style={style.profileAttribute}>
								<Text style={style.profileAttributeName}>
									Favorite Subject:
								</Text>
								<Text style={style.profileAttributeValue}>
									Physics
								</Text>
							</View>
							<View style={style.profileAttribute}>
								<Text style={style.profileAttributeName}>
									Cohort
								</Text>
								<Text style={style.profileAttributeValue}>
									2024
								</Text>
							</View>
						</View>
						<View
							style={style.profileAttributesSectionImageContainer}
						>
							<ImageBackground
								style={[{aspectRatio: 87/91, resizeMode: "cover"}, style.profileAttributesSectionImage]}
								source={require('../assets/icon.png')}
							/>
						</View>
					</View>
					<View style={style.profileAttribute}>
						<Text style={style.profileAttributeName}>
							Academic Strengths:
						</Text>
						<Text style={style.profileAttributeValue}>
							Leader, note-taking, good listener, Teamplayer
						</Text>
					</View>
					<View style={style.profileAttributeLast}>
						<Text style={style.profileAttributeName}>
							Extra Curricular Activities:
						</Text>
						<Text style={style.profileAttributeValue}>
							Coding Club, Phun with Physics Club
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default ProfileScreen;
