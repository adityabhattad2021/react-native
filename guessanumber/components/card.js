import { View,StyleSheet } from "react-native";

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
        backgroundColor:"#4e0329",
        width:"80%",
        borderRadius:8,
        elevation:6,
        gap:12,
    },
})