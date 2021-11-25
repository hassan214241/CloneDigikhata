import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { List, Text, Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import firebase from "firebase";

const MainContainer = styled.View`
  flex: 1;
`;
const ContentList = styled.View`
  flex: 1;
  margin: 10px;
`;

export const More = () => {
  const LogoutUser = async () => {
    try {
      let logout = await firebase.auth().signOut();
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <MainContainer>
      <ContentList>
        <List.AccordionGroup>
          <List.Accordion
            title="Recycle Bin"
            id="1"
            icon={({ color, size }) => (
              <AntDesign name="delete" size={24} color="black" />
            )}
          >
            <List.Item title="Item 1" />
          </List.Accordion>
          <List.Accordion title="Settings" id="2">
            <List.Item title="Item 2" />
          </List.Accordion>

          <List.Accordion title="Help" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
          <List.Accordion title="About" id="4">
            <List.Item title="Item 3" />
          </List.Accordion>
          <List.Accordion title="Share App" id="5">
            <List.Item title="Item 3" />
          </List.Accordion>
          <List.Accordion title="Logout" id="6">
            <Button
              style={{ justifyContent: "center", alignSelf: "center" }}
              contentStyle={{
                borderWidth: 2,
                padding: 5,
                width: 200,
                borderRadius: 25,
                borderColor: "tomato",
                backgroundColor: "tomato",
              }}
              labelStyle={{ color: "#fff" }}
              icon={({ color, size }) => (
                <MaterialIcons name="login" size={24} color="#fff" />
              )}
              onPress={() => LogoutUser()}
            >Logout</Button>
          </List.Accordion>
        </List.AccordionGroup>
      </ContentList>
    </MainContainer>
  );
};
