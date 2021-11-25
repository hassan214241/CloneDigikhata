import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import styled from "styled-components";
import { Text, Avatar, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Loading } from "../../../components/loading";

const MainContainer = styled.View`
  display: flex;
  flex: 1;
`;
const Card = styled.View`
  margin: 5px 20px 5px 20px;
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
export const AddNewCustomer = () => {
  const { navigate } = useNavigation();
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCustomers = async () => {
    try {
      setIsLoading(true);
      const _customers = await firebase
        .firestore()
        .collection("customers")
        .get();
      setCustomers([..._customers.docs.map((doc) => doc.data())]);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {}, [customers]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <FlatList
        data={customers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Card>
              <ScrollView>
                <CardSection>
                  <AviterImage>
                    <Avatar.Image
                      size={50}
                      source={require("../../../assests/addUser.png")}
                    />
                  </AviterImage>
                  <Info>
                    <Text style={{ fontSize: 18, color: "red" }}>
                      {item.name}
                    </Text>
                    <Text>{item.phoneNumber}</Text>
                  </Info>
                </CardSection>
              </ScrollView>
            </Card>
          </View>
        )}
      />
      <FAB
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: "tomato",
        }}
        color="white"
        icon="plus"
        onPress={() => navigate("CreateCustomer")}
      />
    </MainContainer>
  );
};
