import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView } from "react-native";
import styled from "styled-components";
import { Text, Avatar, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Loading } from "../../../components/loading";
import { MaterialIcons } from "@expo/vector-icons";

const MainContainer = styled.View`
  display: flex;
  flex: 1;
`;
const Card = styled.View`
  margin: 10px 20px 10px 20px;
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
export const AddNewSupplier = () => {
  const { navigate } = useNavigation();
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getSuppliers = async () => {
    try {
      setLoading(true);
      let _suppliers = await firebase.firestore().collection("supplier").get();
      setSuppliers([..._suppliers.docs.map((doc) => doc.data())]);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSuppliers();
  }, []);
  useEffect(() => {}, [suppliers]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <MainContainer>
      <FlatList
        data={suppliers}
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
          backgroundColor: "green",
        }}
        color="white"
        icon="plus"
        onPress={() => navigate("CreateSupplier")}
      />
    </MainContainer>
  );
};
