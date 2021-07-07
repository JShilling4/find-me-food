import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer.component.js";
import { Text } from "../../../components/text.component.js";
import star from "../../../../assets/star.js";
import openSign from "../../../../assets/open.js";
import {
    Cover,
    Info,
    Section,
    Rating,
    SectionEnd,
    Icon,
    Address,
} from "./restaurant-info-card.styles.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://www.clipartmax.com/png/middle/141-1418392_overnight-services-bed-icon-png-blue.png",
        photos = [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        ],
        address = "100 E 1st St",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <Card elevation={5}>
            <Cover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((r, index) => (
                            <SvgXml
                                key={index}
                                xml={star}
                                width={20}
                                height={20}
                            />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                        <Spacer position="left" size="large" />
                        {isOpenNow && (
                            <SvgXml xml={openSign} width={20} height={20} />
                        )}
                        <Spacer position="left" size="large" />
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>

                <Address>{address}</Address>
            </Info>
        </Card>
    );
};
