import {
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native"
import Title from "../components/title";
import Colors from "../constants/colors";
import { useState } from "react";
import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import { Ionicons } from '@expo/vector-icons';

function generateRandomNumber(min, max, exclude, toExclude) {
    console.log("Random Number", min, max)
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    while (randomNumber === exclude && toExclude) {
        randomNumber = Math.floor(Math.random() * (max - min)) + min
    }
    return randomNumber;
}

export default function GameScreen({ correctAnswer,handleGameOver }) {

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(100);
    const [computerGuess, setComputerGuess] = useState(state => {
        return generateRandomNumber(minVal, maxVal, correctAnswer, true)
    });

    function handleOnPress(symbol) {
        let newMinVal = minVal;
        let newMaxVal = maxVal;
        let flag = true;
        switch (symbol) {
            case "+": {
                if(computerGuess>correctAnswer){
                    Alert.alert(
                        'Please don\'t!',
                        'Trust us you don\'t want to get stuck in an endless loop!',
                        [
                            {
                                text: 'Okay',
                                
                                style: 'destructive'
                            }
                        ]
                    )
                    flag = false;
                }else{
                    newMinVal = computerGuess;
                    setMinVal(newMinVal);
                }
                break;
            }
            case "-": {
                if(computerGuess<correctAnswer){
                    Alert.alert(
                        'Please don\'t!',
                        'Trust us you don\'t want to get stuck in an endless loop!',
                        [
                            {
                                text: 'Okay',
                                style: 'destructive'
                            }
                        ]
                    )
                    flag = false;
                }else{
                    newMaxVal = computerGuess;
                    setMaxVal(newMaxVal);
                }
                break;
            }
        }
        if(!flag){
            return;
        }
        const val = generateRandomNumber(newMinVal, newMaxVal, correctAnswer, false);
        if (val === correctAnswer) {
            Alert.alert(
                'Game over!',
                'We hope you had fun playing this stupid game!',
                [
                    {
                        text: 'Okay',
                        onPress: handleGameOver,
                        style: 'default'
                    }
                ]
            )
        } else {
            setComputerGuess(val);
        }
    }

    return (
        <View style={styles.screen}>
            <Title text="Opponent's Guess" />
            <Card >

                <View>
                    {/* Guess */}
                    <Text style={styles.guess}>
                        {computerGuess}
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <PrimaryButton
                            onPress={() => handleOnPress("-")}
                        >
                            <Ionicons name="remove" size={24} color={Colors.foreground.primary} />
                        </PrimaryButton>
                        <PrimaryButton
                            onPress={() => handleOnPress("+")}
                        >
                            <Ionicons name="add" size={24} color={Colors.foreground.primary} />
                        </PrimaryButton>
                    </View>
                </View>
                {/* <View>TODO: Log Rounds here.</View> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    guess: {
        height: 50,
        width: 50,
        fontSize: 32,
        color: Colors.foreground.primary,
        marginVertical: 8,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        gap: 60
    },
})