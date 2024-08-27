import {
    View,
    StyleSheet,
    Text,
    Pressable
} from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ children,onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        flex:1,
        alignItems:'center',
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer: {  
        width:"100%",
        backgroundColor: Colors.background.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems:"center",
        elevation: 2
    },
    buttonText: {
        color: Colors.accent.primary,
        elevation: 4,
    }
})