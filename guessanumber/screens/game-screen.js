import {
    View,
    Text,
    StyleSheet,
    Alert,
    FlatList,
    SafeAreaView,
    useWindowDimensions
} from "react-native"
import Title from "../components/title";
import Colors from "../constants/colors";
import { useCallback, useEffect, useMemo, useState } from "react";
import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import { Ionicons } from '@expo/vector-icons';

function generateRandomNumber(min, max, exclude) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    while (randomNumber === exclude) {
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    return randomNumber;
}

export default function GameScreen({ correctAnswer, handleGameOver, setMoves, moves }) {

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(100);
    const [currentGuess, setCurrentGuess] = useState(() => generateRandomNumber(1, 100, correctAnswer));
    const { width, height } = useWindowDimensions();

    let controls = (
        <Card>
            <Text style={styles.guess}>
                {currentGuess}
            </Text>
            <View style={styles.buttonsContainer}>
                <PrimaryButton
                    onPress={() => nextGuessHandler('lower')}
                >
                    <Ionicons
                        name="remove"
                        size={24}
                        color={Colors.foreground.primary}
                    />
                </PrimaryButton>
                <PrimaryButton
                    onPress={() => nextGuessHandler('higher')}
                >
                    <Ionicons
                        name="add"
                        size={24}
                        color={Colors.foreground.primary}
                    />
                </PrimaryButton>
            </View>
        </Card>
    )

    if (height < 400) {
        controls = (
            <Card>

                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        onPress={() => nextGuessHandler('lower')}
                    >
                        <Ionicons
                            name="remove"
                            size={24}
                            color={Colors.foreground.primary}
                        />
                    </PrimaryButton>
                    <Text style={styles.guess}>
                        {currentGuess}
                    </Text>
                    <PrimaryButton
                        onPress={() => nextGuessHandler('higher')}
                    >
                        <Ionicons
                            name="add"
                            size={24}
                            color={Colors.foreground.primary}
                        />
                    </PrimaryButton>
                </View>
            </Card>
        )
    }


    useEffect(() => {
        setMoves(prevMoves => [currentGuess, ...prevMoves])
    }, [currentGuess, setMoves])

    useEffect(() => {
        if (currentGuess === correctAnswer) {
            Alert.alert('Game Over', 'We hope you had fun playing this stupid game!', [
                {
                    text: 'Okay',
                    onPress: handleGameOver
                }
            ])
        }
    }, [currentGuess, correctAnswer, handleGameOver]);

    const nextGuessHandler = useCallback((direction) => {
        if (direction === 'lower' && currentGuess < correctAnswer || direction === 'higher' && currentGuess > correctAnswer) {
            Alert.alert('Don\'t lie!', 'Don\'t lie trust us you don\'t wanna be stuck playing this stupid game...', [
                {
                    text: 'Sorry!',
                    style: 'cancel'
                }
            ])
        }

        if (direction === 'lower') {
            setMaxVal(currentGuess)
        } else {
            setMinVal(currentGuess + 1)
        }

        const newRandomNumber = generateRandomNumber(
            direction === 'lower' ? minVal : currentGuess + 1,
            direction === 'lower' ? currentGuess : maxVal,
            currentGuess
        )
        setCurrentGuess(newRandomNumber)
    }, [currentGuess, minVal, maxVal, correctAnswer])

    const guessRoundListLength = useMemo(() => moves.length, [moves])

    return (
        <SafeAreaView style={styles.screen}>
            <Title
                text="Opponent's guess"
            />
            {controls}
            <View style={styles.listContainer}>
                <Text
                    style={styles.statsTitle}
                >
                    Previous Guesses
                </Text>
                <FlatList
                    data={moves}
                    renderItem={({ item, index }) => (
                        <View style={styles.moveItem}>
                            <Text style={styles.moveNumber}>#{guessRoundListLength - index}</Text>
                            <Text style={styles.moveValue}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(_, index) => `guess-${index}`}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 24,
        flex: 1,
        padding: 24,
        alignItems: 'center',
        gap: 30,
    },
    guess: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.foreground.primary,
        textAlign: 'center',
        marginVertical: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        justifyContent: 'center',
        gap: 6
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
    statsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.foreground.primary,
        textAlign: 'center',
        marginVertical: 16,
    },
    flatListContent: {
        flexGrow: 1,
    },
    moveItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.background.tertiary,
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 8,
    },
    moveNumber: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.accent.secondary
    },
    moveValue: {
        fontSize: 18,
        color: Colors.accent.primary
    }
})