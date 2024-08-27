import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import StartGameScreen from './screens/start-game-screen';
import { useState } from 'react';
import GameScreen from './screens/game-screen';

export default function App() {
	const [correctAnswer, setCorrectAnswer] = useState();
	return (
		<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
			<ImageBackground
				style={styles.rootScreen}
				source={require("./assets/images/background.png")}
				imageStyle={styles.backgroundImage}
				resizeMode='cover'
			>
				<StatusBar style="light" />
				<SafeAreaView style={styles.rootScreen}>
					{correctAnswer ? <GameScreen /> : <StartGameScreen onStartGame={setCorrectAnswer} />}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	}
});