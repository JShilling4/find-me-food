import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
    padding: 16px;
    color: red;
`;

const Cover = styled(Card.Cover)`
    padding: 16px;
    background-color: white;
`;

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
        <Card elevation={5}>
            <Cover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </Card>
    );
};
