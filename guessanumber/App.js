import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/start-game-screen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <StartGameScreen/>
    </>
  );
}

const styles = StyleSheet.create({
 
});
