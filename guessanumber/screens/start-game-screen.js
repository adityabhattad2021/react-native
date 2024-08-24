import {
    View,
    TextInput,
    StyleSheet
} from "react-native"
import PrimaryButton from "../components/primary-button"

export default function StartGameScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"  
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.buttonsContainer}>
                    <PrimaryButton>
                        Submit
                    </PrimaryButton>
                    <PrimaryButton>
                        Reset
                    </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    inputContainer:{
        padding:8,
        backgroundColor:"#4e0329",
        width:"80%",
        borderRadius:8,
        elevation:6,
        gap:12,
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'
    }
})