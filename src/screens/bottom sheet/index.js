import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MainContainer = styled.View`
  display: flex;
  flex: 1;
`;
const BottomContent = styled.View`
  display: flex;
  flex: 2;
  align-items: center;
  margin: 20px;
`;
const NayaBtn = styled.View`
  display: flex;
  flex: 1;
  margin: 20px;
  justify-content: flex-end;
`;

export const BottomSheet = () => {
  const { navigate } = useNavigation();
  return (
    <MainContainer>
      <BottomContent>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "tomato",
          }}
        >
          Select Business
        </Text>
      </BottomContent>
      <NayaBtn>
        <Button
          contentStyle={{
            width: "100%",
            padding: 5,
            borderRadius: 5,
            borderColor: "tomato",
            borderWidth: 2,
            backgroundColor: "#fff",
          }}
          labelStyle={{ color: "tomato" }}
          icon={({ color, size }) => (
            <EvilIcons name="plus" size={24} color="tomato" />
          )}
          onPress={() => navigate("NewBusiness")}
        >
          NAYA BUSINESS BNAYEN
        </Button>
      </NayaBtn>
    </MainContainer>
  );
};
