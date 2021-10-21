import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text, Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MainContainer = styled.View`
  display: flex;
  flex: 1;
`;
const Card = styled.View`
  flex: 5;
  margin: 20px;
  display: flex;
  flex-direction: row;
`;
const CardSection = styled.View`
  width: 100%;
  height: 100px;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;
const AviterImage = styled.View`
  display: flex;
  padding: 20px;
`;
const Info = styled.View`
  display: flex;
  flex-direction: column;
`;
const NayCustomer = styled.View`
  flex: 1;
`;
const CustomerBtn = styled.View`
  display: flex;

  flex-direction: column;
  margin: 20px;
`;
export const AddNewSupplier = () => {
  const { navigate } = useNavigation();
  return (
    <MainContainer>
      <Card>
        <CardSection>
          <AviterImage>
            <Avatar.Image
              size={50}
              source={require("../../../assests/addUser.png")}
            />
          </AviterImage>
          <Info>
            <Text style={{ fontSize: 18, color: "red" }}>OPEN PHONE BOOK</Text>
            <Text>Phonebook sa customer add karein</Text>
          </Info>
        </CardSection>
      </Card>
      <NayCustomer>
        <CustomerBtn>
          <Button
            contentStyle={{
              width: "100%",
              padding: 5,
              borderRadius: 10,
              borderColor: "red",

              backgroundColor: "tomato",
            }}
            labelStyle={{ color: "#fff" }}
            onPress={() => navigate("CreateSupplier")}
          >
            Naya Supplier Bnayen
          </Button>
        </CustomerBtn>
      </NayCustomer>
    </MainContainer>
  );
};
