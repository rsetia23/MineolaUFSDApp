import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	ImageBackground,
	ScrollView,
	Image,
} from 'react-native';
import style from '../styles/NewsScreen.css';

function NewsScreen(props) {
	return (
		<SafeAreaView style={{ paddingTap: StatusBar.currentHeight, flex: 1 }}>
			<View style={style.newsContainer}>
				<ImageBackground
					style={style.logo}
					source={require('../assets/mineolaUFSD.png')}
				></ImageBackground>
				<Text style={style.titleText}>News</Text>

				<ScrollView style={style.newsContentContainer}>
					<View style={style.newsContentBlock}>
						<Text style={style.newsContentHeading}>
							E-Waste Drive
						</Text>
						<Image
							style={style.newsContentImage}
							source={require('../assets/newsContent1.png')}
						></Image>
						<Text style={style.newsContentBlurb}>
							Congrats to our middle school students for another
							successful E-Waste Drive. Thanks to their...
						</Text>
					</View>

					<View style={style.newsContentBlock}>
						<Text style={style.newsContentHeading}>
							Commended Student
						</Text>
						<Image
							style={style.newsContentImage}
							source={require('../assets/newsContent2.png')}
						></Image>
						<Text style={style.newsContentBlurb}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default NewsScreen;
