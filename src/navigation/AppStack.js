import React from "react";
import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";
import { HomeTab } from "./HomeTab";
import { AddNewCustomer } from "../screens/customer/add_new_customer";
import { CreateCustomer } from "../screens/customer/create_customer";
import { AddNewSupplier } from "../screens/supplier/add_new_supplier";
import { CreateSupplier } from "../screens/supplier/create_supplier";
import { CashRegister } from "../screens/cash/cash register";
import { CashIn } from "../screens/cash/cash in";
import { CashOut } from "../screens/cash/cash out";
import { NewBusiness } from "../screens/new_business";
import { Collection } from "../screens/collection";

const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="green" />
            ),
            headerTitle: () => (
              <View>
                <Text style={{ color: "green", fontSize: 18 }}>Cash In</Text>
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
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="tomato" />
            ),
            headerTitle: () => (
              <View>
                <Text style={{ color: "tomato", fontSize: 18 }}>Cash Out</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="NewBusiness"
          component={NewBusiness}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  New Business
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={{
            headerTitleStyle: {
              color: "#fff",
            },
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerBackTitleVisible: false,
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor="white" />
            ),
            headerTitle: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20 }}>Collection</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    
  );
};
