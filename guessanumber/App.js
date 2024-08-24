import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import StartGameScreen from './screens/start-game-screen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}
        resizeMode='cover'
      >
        <StatusBar style="light" />
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15,
  }
});
