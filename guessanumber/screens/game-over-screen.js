import {
    View,
    StyleSheet
} from "react-native";
import Card from "../components/card";
import PrimaryButton from "../components/primary-button";

export default function GameOverScreen({ handleRestart }) {


    return (
        <View style={styles.screen}>
            <Card>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        onPress={handleRestart}
                    >
                        Restart??
                    </PrimaryButton>
                </View>
            </Card>
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
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
})