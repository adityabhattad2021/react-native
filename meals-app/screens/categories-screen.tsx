import { FlatList, StyleSheet, SafeAreaView, useWindowDimensions, View } from "react-native";
import Constants from "expo-constants"
import { CATEGORIES } from "../data/dummy-data"
import CategoryItem from "../components/category-item";
import Colors from "../theme/colors";

export default function CategoriesScreen() {
    const { height } = useWindowDimensions();
    const noOfCols = height > 400 ? 2 : 6;
    
    return (
        <SafeAreaView
            style={styles.safeArea}
        >
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <CategoryItem
                            category={item}
                        />
                    )
                }}
                numColumns={noOfCols}
                key={noOfCols}
                contentContainerStyle={[styles.screen,{ alignItems : height > 400 ? 'center':'flex-start'}]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.background.primary,
      },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',

        marginTop: Constants.statusBarHeight + 10,
        padding: 10,
        backgroundColor: Colors.background.primary
    }
})