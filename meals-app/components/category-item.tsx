import { Text, View, StyleSheet, Dimensions, Pressable, useWindowDimensions } from "react-native"
import { CategoryInterface } from "../models/category"
import Colors from "../theme/colors"


interface CategoryItemProps {
    category: CategoryInterface
}

export default function CategoryItem({
    category
}: CategoryItemProps) {
    const {width} = useWindowDimensions();
    const itemSize = Math.min(width * 0.35, 150)
    const backgroundColor = generateColor(category.id);
    const textColor = getContrastColor(backgroundColor);
    return (
        <View style={[styles.cointainer, { backgroundColor: backgroundColor,width:itemSize,height:itemSize }]}>
            <Pressable style={styles.button}>
                <Text style={[{ color: textColor }]}>
                    {category.id}
                </Text>
                <Text style={[{ color: textColor }]}>
                    {category.title}
                </Text>
            </Pressable>
        </View>
    )
}


function generateColor(id: string): string {
    const foodColors = [
        '#FF9966', // Peach
        '#FFB366', // Light Orange
        '#E6B333', // Golden
        '#CC9900', // Dark Yellow
        '#99CC33', // Lime Green
        '#66CC99', // Mint
        '#FF6666', // Light Red
        '#FF9999', // Pink
        '#CC6666', // Dusty Red
        '#996633', // Brown
        '#663300', // Dark Brown
        '#CC9966', // Tan
    ];

    const index = parseInt(id, 36) % foodColors.length;
    return foodColors[index];
}

function getContrastColor(hexColor: string): string {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? '#000000' : '#FFFFFF';
}


const styles = StyleSheet.create({
    cointainer: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 12,
        borderRadius: 24,
        margin:15,
    },
    button:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 8,
    }
})