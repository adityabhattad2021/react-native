import {
    View,
    Text,
    StyleSheet
} from "react-native"
import Title from "../components/title";

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>
                Opponent's Guess
            </Title>
            <View style={styles.gameBox}>
                {/* Guess */}
                <View>
                    <Text>
                        Higher or Lower??
                    </Text>
                    {/* + - */}
                </View>
                {/* <View>TODO: Log Rounds here.</View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        gap: 60
    },
    gameBox: {
        backgroundColor: '#4e0329',
        borderRadius: 12,
        width: "80%",
        padding: 8,
        elevation: 6,
        gap: 12,
    }
})