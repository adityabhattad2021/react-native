import {
    View,
    TextInput,
    StyleSheet,
    Alert
} from "react-native"
import PrimaryButton from "../components/primary-button";
import { useState } from "react"
import Card from "../components/card";
import Colors from "../constants/colors";
import Title from "../components/title";

export default function StartGameScreen({onStartGame}) {

    const [number,setNumber] = useState('');

    function numberInputHandler(value){
        setNumber(value);
    }

    function confirmInputHandler(){
        const integerValue = parseInt(number);

        if (isNaN(integerValue) || integerValue<0 || integerValue>99){
            Alert.alert(
                'Invalid Number',
                'Only numbers b/w 0 to 99 (99 included) are valid!',
                [
                    {
                        text:'Okay',
                        onPress:resetHandler,
                        style:'destructive'
                    }
                ]
            )
        }

        onStartGame(integerValue)
        
    }

    function resetHandler(){
        setNumber('');
    }

    return (
        <View style={styles.mainContainer}>
            <Title text="Enter a number" style={styles.title}/>
            <Card>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"  
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={number}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        onPress={resetHandler}
                    >
                        Reset
                    </PrimaryButton>
                    <PrimaryButton
                        onPress={confirmInputHandler}
                    >
                        Submit
                    </PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        marginBottom:30
    },
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.foreground.primary,
        borderBottomWidth:2,
        color:Colors.foreground.primary,
        marginVertical:8,
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'
    }
})