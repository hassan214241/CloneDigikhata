import React, { useState } from 'react'
import { View } from 'react-native';
import styled from 'styled-components';
import { TextInput, Text, Button, Snackbar, Portal } from "react-native-paper"
import { Formik } from 'formik';
import * as Yup from "yup";
import firebase from "firebase";
import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

const MainContainer = styled.View`
  display: flex;
  flex: 1;
   background-color: tomato;
   `;
const InputsContainer = styled.View`
   flex: 1;
   display: flex;
   justify-content: center;
   margin: 20px;
   `;




export const SignUp = () => {

  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation();
  const CreateUser = async (email, password) => {
    try {
      const _CreateUser = await firebase.auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      setVisible(true)
      if (_CreateUser) {
        console.log("user create successfully")
      } else {
        console.log("user not create successfully")
      }
    } catch (error) {
      console.log("Error", error)
    }
  }

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required("Required")
  })

  return (
    <MainContainer>
      <InputsContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={value => CreateUser(value.email, value.password)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

            <>
              <Text style={{ fontSize: 28, color: "black", justifyContent: "center", alignSelf: "center" }}>Singup</Text>
              <Text></Text>
              <TextInput
                label="Email "
                selectionColor="black"
                underlineColor="black"
                outlineColor="black"
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                theme={{ colors: { primary: "black" } }}
              />
              {errors.email && (
                <Text style={{ fontSize: 10, color: 'black' }}>{errors.email}</Text>
              )}
              <Text></Text>
              <TextInput
                label="Password "
                selectionColor="black"
                underlineColor="black"
                outlineColor="black"
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                theme={{ colors: { primary: "black" } }}

              />
              {errors.password && (
                <Text style={{ fontSize: 10, color: 'black' }}>
                  {errors.password}
                </Text>
              )}
              <Text></Text>
              <Button
                style={{ justifyContent: "center", alignSelf: "center" }}
                contentStyle={{
                  borderWidth: 2,
                  width: 200,
                  borderRadius: 25,
                  borderColor: '#44b6e4',
                  backgroundColor: '#fff',
                }}
                labelStyle={{
                  color: "black",
                }}
                onPress={handleSubmit}
              >SignUp</Button>
              <Text></Text>
              <Button
                style={{ justifyContent: "center", alignSelf: "center" }}
                contentStyle={{
                  borderWidth: 2,
                  width: 200,
                  borderRadius: 25,
                  borderColor: '#44b6e4',
                  backgroundColor: '#fff',
                }}
                labelStyle={{
                  color: "black",
                }}
                onPress={() => navigate('Login')}>
                LOGIN
              </Button>
            </>


          )}
        </Formik>
        <Portal>
          <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
            Singup successfully!
          </Snackbar>
        </Portal>
      </InputsContainer>

    </MainContainer>
  )
}
