import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Home } from "../screens/home";
import { More } from "../screens/more";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Software"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerTitleStyle: {
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "tomato",
          },
          headerTitleAlign: "left",
          headerTitle: ({ children }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="book"
                size={26}
                color="white"
                style={{ paddingRight: 10 }}
              />
              <Text style={{ color: "white", fontSize: 20 }}>{children}</Text>
            </View>
          ),
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
