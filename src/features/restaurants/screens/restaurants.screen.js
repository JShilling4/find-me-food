import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

const Screen = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: 16px;
    background-color: green;
`;

const RestaurantCardContainer = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: blue;
`;

export const RestaurantsScreen = () => {
    return (
        <Screen>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>

            <RestaurantCardContainer>
                <RestaurantInfoCard />
            </RestaurantCardContainer>
        </Screen>
    );
};
