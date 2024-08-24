import {
    View,
    StyleSheet,
    Text,
    Pressable
} from "react-native";

export default function PrimaryButton({ children }) {

    function handleClick() {
        // TODO
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={handleClick} android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        elevation: 4,
    }
})