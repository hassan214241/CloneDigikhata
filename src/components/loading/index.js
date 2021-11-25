import React from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
const MainContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Loading = () => {
  return (
    <MainContainer>
      <ActivityIndicator />
    </MainContainer>
  );
};
