import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Cover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: ${(props) => props.theme.space[1]};
`;

export const Rating = styled.View`
    flex-direction: row;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Icon = styled.Image`
    height: 15px;
    width: 15px;
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;
