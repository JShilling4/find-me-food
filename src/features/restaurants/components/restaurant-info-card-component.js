import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../../../utils/colors";
import { spacing } from "../../../utils/sizes";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        ],
        address = "100 E 1st St",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover
                key={name}
                style={styles.cardCover}
                source={{ uri: photos[0] }}
            />

            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardCover: {
        padding: spacing.lg,
        backgroundColor: colors.white,
    },
    title: {
        padding: spacing.lg,
    },
});
