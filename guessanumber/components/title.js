import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Title({ text,style }) {
    return (
        <Text style={[styles.title,style]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: Colors.accent.primary,
        fontWeight: "bold",
        fontSize: 36,
        fontFamily: "Roboto",
        borderWidth: 2,
        borderColor: Colors.accent.primary,
        paddingVertical: 4,
        paddingHorizontal: 30,
        borderRadius:12
    },
})