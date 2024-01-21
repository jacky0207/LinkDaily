import React, { useState } from "react";
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";

const Signup = () => {
  const [name, setName] = useState("Jacky");
  const [email, setEmail] = useState("jackylam0207@gmail.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true)
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }
    console.log("SIGNUP REQUEST => ", name, email, password);
    try {
      const data = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      })
      setLoading(false);
      console.log("SIGN IN SUCCESS => ", data);
      alert("Sign up successful");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <CircleLogo />

      <Text title center>
        Sign Up
      </Text>

      <UserInput
        name="NAME"
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <UserInput
        name="EMAIL"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <UserInput
        name="PASSWORD"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <SubmitButton
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
    </View>
  );
};

export default Signup;