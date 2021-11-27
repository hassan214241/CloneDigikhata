import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button, Snackbar, Portal } from "react-native-paper";
import styled from "styled-components";
import firebase from "firebase";
import { Formik } from "formik";
import * as Yup from "yup";

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
const InputsContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px;
`;
const BtnContainer = styled.View`
  display: flex;
  flex: 1;
  margin: 20px;
`;
export const CreateCustomer = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addNewCustomer = async (name, phoneNumber) => {
    try {
      setIsLoading(true);
      await firebase.firestore().collection("customers").add({
        name,
        phoneNumber,
      });
      setVisible(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const initialValues = {
    name: "",
    phoneNumber: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  return (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value, actions) => {
          addNewCustomer(value.name, value.phoneNumber);
          actions.resetForm({
            name: "",
            phoneNumber: "",
          });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <InputArea>
              <InputsContainer>
                <TextInput
                  label="Customer Name "
                  selectionColor="black"
                  underlineColor="red"
                  outlineColor="tomato"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  theme={{ colors: { primary: "black" } }}
                />
                <Text></Text>
                {errors.name && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.name}
                  </Text>
                )}
                <TextInput
                  label="Mobile Number"
                  selectionColor="black"
                  underlineColor="red"
                  outlineColor="tomato"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("PhoneNumber")}
                  value={values.phoneNumber}
                  theme={{ colors: { primary: "black" } }}
                />
                {errors.name && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.name}
                  </Text>
                )}
              </InputsContainer>
            </InputArea>
            <SaveBtnArea>
              <BtnContainer>
                <Button
                  loading={isLoading}
                  contentStyle={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 5,
                    borderColor: "red",

                    backgroundColor: "tomato",
                  }}
                  labelStyle={{ color: "#fff" }}
                  onPress={handleSubmit}
                >
                  Save
                </Button>
              </BtnContainer>
            </SaveBtnArea>
          </>
        )}
      </Formik>
      <Portal>
        <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
          Customer added successfully!
        </Snackbar>
      </Portal>
    </MainContainer>
  );
};
