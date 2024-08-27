import { Text, StyleSheet } from "react-native";

export default function Title({ text,style }) {
    return (
        <Text style={[styles.title,style]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#ddb52f",
        fontWeight: "bold",
        fontSize: 36,
        fontFamily: "Roboto",
        borderWidth: 2,
        borderColor: "#ddb52f",
        paddingVertical: 4,
        paddingHorizontal: 30
    },
})