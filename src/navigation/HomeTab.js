import React from 'react'
import { Home } from "../screens/home";
import { More } from "../screens/more";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export const HomeTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarLabel: "Home",

                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="home" color={"black"} size={26} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen name="More" component={More}
                    options={{
                        tabBarLabel: "More",
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="menu" size={24} color="black" />
                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
