import React from "react";
import styled from "styled-components";
import { Caption, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const MainContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Collection = () => {
  return (
    <MainContainer>
      <Ionicons name="calendar-sharp" size={60} color="red" />
      <Caption>Jab kisi se lene hon toh ap tareekh de skty hn.</Caption>
      <Button
        contentStyle={{
          padding: 5,
          borderRadius: 5,
          borderColor: "tomato",
          backgroundColor: "tomato",
        }}
        labelStyle={{ color: "#fff" }}
      >
        Go Back
      </Button>
    </MainContainer>
  );
};
