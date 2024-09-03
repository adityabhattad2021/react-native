import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    useWindowDimensions
} from "react-native";
import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import Colors from "../constants/colors";
import Title from "../components/title";


export default function GameOverScreen({ handleRestart, correctAnswer, numberOfMoves }) {

    const {width,height} = useWindowDimensions();
    const imageSize = {
        width:height > 400 ? 300 : 200,
        height:height > 400 ? 300 : 200,
        borderRadius: height > 300 ? 150: 100,
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Title text={"Game Over"} />
                <View
                    style={[styles.imageContainer,imageSize]}
                >
                    <Image
                        style={styles.image}
                        source={require("../assets/images/success.png")}
                    />
                </View>

                <Text style={styles.stats}>
                    Your computer took <Text style={styles.statsHighlight}>{numberOfMoves}</Text>
                    {" "}moves to get to the number <Text style={styles.statsHighlight}>{correctAnswer}</Text>.
                </Text>
                <View style={styles.buttonParentContainer}>
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
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
        paddingTop:60,
    },
    titleContainer: {
        width: "100%",
        padding: 30
    },
    stats: {
        color: Colors.accent.secondary,
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Roboto",
        paddingVertical: 4,
        paddingHorizontal: 30,
    },
    statsHighlight: {
        color: Colors.accent.tertiary,
        marginHorizontal: 8,
    },
    buttonsContainer: {
        backgroundColor: Colors.background.tertiary,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttonParentContainer: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto"
    },
    imageContainer: {
        overflow: "hidden",
        
        borderWidth: 10,
        borderColor: Colors.foreground.tertiary,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
})