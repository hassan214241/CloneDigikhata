import React from "react";
import { View } from "react-native";
import { Text, Caption, Button } from "react-native-paper";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MainContainer = styled.View`
  flex: 1;
`;
const CardContanier = styled.View`
  flex: 2;
  background-color: tomato;
`;
const InfoSection = styled.View`
  flex: 5;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BtnSection = styled.View`
  flex: 1;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const CardInfo = styled.View`
  flex: 3;
  display: flex;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;
const RepusDetials = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
`;
const Detials1 = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ReportBtn = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const CashRegister = () => {
  const { navigate } = useNavigation();
  return (
    <MainContainer>
      <CardContanier>
        <CardInfo>
          <RepusDetials>
            <Detials1>
              <Text
                style={{ color: "green", fontSize: 16, fontWeight: "bold" }}
              >
                Rs 20000
              </Text>
              <Text>Cash in Hand</Text>
            </Detials1>
            <Detials1>
              <Text
                style={{ color: "black", fontSize: 16, fontWeight: "bold" }}
              >
                Rs 0
              </Text>
              <Text>Today Balance</Text>
            </Detials1>
          </RepusDetials>
          <ReportBtn>
            <Button
              contentStyle={{
                borderTopWidth: 0.5,
                width: 300,
                borderRadius: 10,
                borderColor: "gray",
                flexDirection: "row-reverse",
                backgroundColor: "#fff",
              }}
              labelStyle={{ color: "red" }}
              icon={({ color, size }) => (
                <MaterialIcons name="chevron-right" size={24} color="red" />
              )}
            >
              Purani Entries Daikhen
            </Button>
          </ReportBtn>
        </CardInfo>
      </CardContanier>
      <InfoSection>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Thu, 21 Oct 2021
        </Text>
        <Caption style={{ fontSize: 18 }}>Aaj ki cash entries karen</Caption>
      </InfoSection>
      <BtnSection>
        <Button
          contentStyle={{
            borderWidth: 2,
            padding: 5,
            width: 150,
            borderRadius: 10,
            borderColor: "tomato",
            backgroundColor: "tomato",
          }}
          labelStyle={{ color: "#fff" }}
          icon={({ color, size }) => (
            <EvilIcons name="minus" size={24} color="#fff" />
          )}
          onPress={() => navigate("CashOut")}
        >
          OUT
        </Button>
        <Button
          contentStyle={{
            borderWidth: 2,
            padding: 5,
            width: 150,
            borderRadius: 10,
            borderColor: "green",
            backgroundColor: "green",
          }}
          labelStyle={{ color: "#fff" }}
          icon={({ color, size }) => (
            <EvilIcons name="plus" size={24} color="#fff" />
          )}
          onPress={() => navigate("CashIn")}
        >
          IN
        </Button>
      </BtnSection>
    </MainContainer>
  );
};
