import React from "react";
import { HomeStack } from "./src/navigation/HomeStack";
import "react-native-gesture-handler";
import "./firebase-init";
import { Provider } from "react-native-paper";

export default function App() {
  return (
    <Provider>
      <HomeStack />
    </Provider>
  );
}
