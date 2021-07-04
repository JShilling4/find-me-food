import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/sizes";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

export const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>

            <View style={styles.cardContainer}>
                <RestaurantInfoCard />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    cardContainer: {
        flex: 1,
        padding: spacing.md,
        backgroundColor: "blue",
    },
    search: {
        padding: spacing.md,
        backgroundColor: "green",
    },
});
