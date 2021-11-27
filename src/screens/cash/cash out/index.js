import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button, Snackbar, Portal } from "react-native-paper";
import styled from "styled-components";
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
export const CashOut = () => {
  const initialValues = {
    cashOut: "",
  };
  const validationSchema = Yup.object({
    cashOut: Yup.string().required("Required"),
  });

  return (
    <MainContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value, actions) => {
          actions.resetForm({
            cashOut: "",
          });
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <InputArea>
              <InputsContainer>
                <TextInput
                  label="Amount Enter Karein"
                  selectionColor="black"
                  underlineColor="tomato"
                  placeholder="Rs"
                  onChangeText={handleChange("cashOut")}
                  onBlur={handleBlur("cashOut")}
                  value={values.cashOut}
                  theme={{ colors: { primary: "black" } }}
                />
                {errors.cashOut && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.cashOut}
                  </Text>
                )}
              </InputsContainer>
            </InputArea>
            <SaveBtnArea>
              <BtnContainer>
                <Button
                  contentStyle={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 5,
                    borderColor: "tomato",

                    backgroundColor: "tomato",
                  }}
                  labelStyle={{ color: "#fff" }}
                >
                  Save
                </Button>
              </BtnContainer>
            </SaveBtnArea>
          </>
        )}
      </Formik>
      <Portal>
        <Snackbar>Cash Out successfully!</Snackbar>
      </Portal>
    </MainContainer>
  );
};
