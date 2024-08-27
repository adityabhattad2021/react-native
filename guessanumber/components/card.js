import { View,StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Card({children,style}){
    return (
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:Colors.background.tertiary,
        width:"80%",
        borderRadius:8,
        elevation:6,
        gap:12,
    },
})