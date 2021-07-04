import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/sizes";

export const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>

            <View style={styles.list}>
                <Text>List</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: spacing.md,
        backgroundColor: "green",
    },
    list: {
        padding: spacing.md,
        backgroundColor: "blue",
        flexGrow: 1,
    },
});
