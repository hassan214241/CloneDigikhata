import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeTab } from "./HomeTab";
import { AddNewCustomer } from "../screens/customer/add new customer";
import { CreateCustomer } from "../screens/customer/create customer";
import { AddNewSupplier } from "../screens/supplier/add new supplier";
import { CreateSupplier } from "../screens/supplier/create supplier";
import { CashRegister } from "../screens/cash/cash register";
import { CashIn } from "../screens/cash/cash in";
import { CashOut } from "../screens/cash/cash out";

const Stack = createStackNavigator();
export const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddNewCustomer"
          component={AddNewCustomer}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            // headerTitleAlign: "left",
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  ADD CUSTOMER
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="CreateCustomer"
          component={CreateCustomer}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Naya Customer Bnayen
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="AddNewSupplier"
          component={AddNewSupplier}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  ADD SUPPLIER
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="CreateSupplier"
          component={CreateSupplier}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Naya Supplier Bnayen
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="CashRegister"
          component={CashRegister}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            // headerTitleAlign: "left",
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Cash Register
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="CashIn"
          component={CashIn}
          options={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitle: () => (
              <View>
                <Text
                  style={{ color: "green", fontSize: 18, fontWeight: "bold" }}
                >
                  Cash In
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="CashOut"
          component={CashOut}
          options={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitle: () => (
              <View>
                <Text
                  style={{ color: "tomato", fontSize: 18, fontWeight: "bold" }}
                >
                  Cash Out
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
