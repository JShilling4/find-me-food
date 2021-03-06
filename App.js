import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "./src/features/map/screens/map.screen";
import { SettingsScreen } from "./src/features/settings/screens/settings.screen";
import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "ios-restaurant-outline",
    Map: "ios-map-outline",
    Settings: "ios-list-outline",
};

export default function App() {
    // load up google fonts
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    const createScreenOptions = ({ route }) => {
        const iconName = TAB_ICON[route.name];
        return {
            tabBarIcon: ({ size, color }) => (
                <Ionicons name={iconName} size={size} color={color} />
            ),
        };
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsContextProvider>
                    <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={createScreenOptions}
                            tabBarOptions={{
                                activeTintColor: "tomato",
                                inactiveTintColor: "gray",
                            }}
                        >
                            <Tab.Screen
                                name="Restaurants"
                                component={RestaurantsScreen}
                            />
                            <Tab.Screen name="Map" component={MapScreen} />
                            <Tab.Screen
                                name="Settings"
                                component={SettingsScreen}
                            />
                        </Tab.Navigator>
                    </NavigationContainer>
                </RestaurantsContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
