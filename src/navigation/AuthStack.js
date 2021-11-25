import { createStackNavigator } from "@react-navigation/stack";
// import { Login } from "../screens/login";
// import { SignUp } from "../screens/signUp";
import { VerifyCode } from "../screens/otp/verification-Otp";
import React from "react";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        name="VerifyCode"
        component={VerifyCode}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
