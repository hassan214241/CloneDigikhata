import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { List, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const MainContainer = styled.View`
  flex: 1;
`;
const ContentList = styled.View`
  flex: 1;
  margin: 10px;
`;

export const More = () => {
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
        </List.AccordionGroup>
      </ContentList>
    </MainContainer>
  );
};
