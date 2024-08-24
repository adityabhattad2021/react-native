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
        flex:1,
        alignItems:'center',
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer: {  
        width:"100%",
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems:"center",
        elevation: 2
    },
    buttonText: {
        color: 'white',
        elevation: 4,
    }
})