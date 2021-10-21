import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import styled from "styled-components";

const MainContainer = styled.View`
  display: flex;
  flex: 1;
`;
const InputArea = styled.View`
  display: flex;
  flex: 5;
`;
const SaveBtnArea = styled.View`
  flex: 1;
`;
const Inputs = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px;
`;
const Butn = styled.View`
  display: flex;
  flex: 1;
  margin: 20px;
`;
export const CreateSupplier = () => {
  return (
    <MainContainer>
      <InputArea>
        <Inputs>
          <TextInput
            label="Supplier Name"
            selectionColor="black"
            underlineColor="red"
            outlineColor="tomato"
            theme={{ colors: { primary: "black" } }}
          />
          <Text></Text>
          <TextInput
            label="Mobile Number"
            selectionColor="black"
            underlineColor="red"
            outlineColor="tomato"
            theme={{ colors: { primary: "black" } }}
          />
        </Inputs>
      </InputArea>
      <SaveBtnArea>
        <Butn>
          <Button
            contentStyle={{
              width: "100%",
              padding: 10,
              borderRadius: 5,
              borderColor: "red",

              backgroundColor: "tomato",
            }}
            labelStyle={{ color: "#fff" }}
          >
            Save
          </Button>
        </Butn>
      </SaveBtnArea>
    </MainContainer>
  );
};