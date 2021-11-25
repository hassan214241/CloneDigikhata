import React, { useState, useRef } from "react";
import { Text, TextInput, Image, View } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { Button } from "react-native-paper";

import firebase from "firebase";
export const VerifyCode = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
      });
  };

  if (!verificationId) {
    return (
      <>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebase.app().options}
          />
          <Image
            source={require("../../../assests/security.png")}
            style={{ width: 130, height: 150 }}
          />
          <Text></Text>
          <TextInput
            style={{
              width: 300,
              borderColor: "black",
              backgroundColor: "#e6e3e3",
              height: 50,
              borderRadius: 10,
              padding: 10,
            }}
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            autoCompleteType="tel"
          />
          <Text></Text>

          <Button
            style={{ justifyContent: "center", alignSelf: "center" }}
            contentStyle={{
              borderWidth: 2,
              width: 200,
              borderRadius: 25,
              borderColor: "#87ceeb",
              backgroundColor: "#1bb54c",
            }}
            labelStyle={{
              color: "black",
            }}
            onPress={() => sendVerification()}
          >
            Get Otp
          </Button>
        </View>
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
      </>
    );
  }

  return (
    <>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Image
          source={require("../../../assests/security.png")}
          style={{ width: 130, height: 150 }}
        />
        <Text></Text>
        <TextInput
          style={{
            width: 300,
            borderColor: "black",
            backgroundColor: "#e6e3e3",
            height: 50,
            borderRadius: 10,
            padding: 10,
          }}
          placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="name-phone-pad"
        />
        <Text></Text>
        <Button
          style={{ justifyContent: "center", alignSelf: "center" }}
          contentStyle={{
            borderWidth: 2,
            width: 200,
            borderRadius: 25,
            borderColor: "#87ceeb",
            backgroundColor: "#1bb54c",
          }}
          labelStyle={{
            color: "black",
          }}
          onPress={() => confirmCode()}
        >
          verify OTP
        </Button>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
    </>
  );
};
