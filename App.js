import React from "react";
import "react-native-gesture-handler";
import "./firebase-init";
import { Provider } from "react-native-paper";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}
