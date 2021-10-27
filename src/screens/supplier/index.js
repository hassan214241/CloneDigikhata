import React from "react";
import styled from "styled-components";
import { Button, Avatar, Text, IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MainContainer = styled.View`
  flex: 1;
`;
const CardContanier = styled.View`
  flex: 2;
  background-color: tomato;
`;
const CustomerCard = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AddBtn = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: 15px;
`;

const CardInfo = styled.View`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;

const CashRegister = styled.View`
  flex: 1;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const MonthDetials = styled.View`
  flex: 2;
  flex-direction: row;
`;
const Detials1 = styled.View`
  display: flex;
  flex: 2;
  justify-content: space-between;
  flex-direction: row;
`;
const AppBtn = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Supplier = () => {
  const { navigate } = useNavigation();
  return (
    <MainContainer>
      <CardContanier>
        <CardInfo>
          <MonthDetials>
            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15 }}>
              October ke liye total purchase
            </Text>
          </MonthDetials>
          <Detials1>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                marginTop: 15,
                fontWeight: "bold",
              }}
            >
              Rs 0
            </Text>
            <IconButton
              style={{
                borderWidth: 2,
                borderColor: "red",
                borderRadius: "5",
                width: 40,
                marginRight: 10,
                backgroundColor: "#fff",
              }}
              icon={({ color, size }) => (
                <MaterialIcons name="chevron-right" size={size} color="red" />
              )}
              onPress={() => alert("Please Add a Supplier to View Report")}
            />
          </Detials1>
          <AppBtn>
            <Text style={{ marginLeft: 10, fontWeight: "500", color: "green" }}>
              Aap denge
            </Text>
            <Text
              style={{ marginRight: 10, fontWeight: "500", color: "green" }}
            >
              Rs 0
            </Text>
          </AppBtn>
        </CardInfo>
        <CashRegister>
          <Button
            contentStyle={{
              width: 200,
              borderRadius: 10,
              borderColor: "red",
              backgroundColor: "#fff",
            }}
            labelStyle={{ color: "red" }}
            onPress={() => navigate("CashRegister")}
          >
            Cash Register
          </Button>
        </CashRegister>
      </CardContanier>

      <CustomerCard>
        <Avatar.Image size={60} source={require("../../assests/user.png")} />
        <Text></Text>
        <Text style={{ fontWeight: "bold" }}>
          Supplier add karein aur apne purchase ko
        </Text>
        <Text style={{ fontWeight: "bold" }}>manage karien.</Text>
      </CustomerCard>
      <AddBtn>
        <Button
          contentStyle={{
            borderWidth: 2,
            width: 200,
            padding: 5,
            borderRadius: 25,
            borderColor: "green",
            backgroundColor: "green",
          }}
          labelStyle={{ color: "#fff" }}
          icon={({ color, size }) => (
            <Feather name="user-plus" size={24} color="#fff" />
          )}
          onPress={() => navigate("AddNewSupplier")}
        >
          ADD SUPPLIER
        </Button>
      </AddBtn>
    </MainContainer>
  );
};
