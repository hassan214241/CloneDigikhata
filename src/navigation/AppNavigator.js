import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import firebase from "firebase";

export const AppNavigator = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let subscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return subscribe;
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
