import React, { Component, useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import global from "../../../styles/global";
import axios from "../../utils/axios";
import { MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { validateEmail } from "../../methods/validation";
import { AuthContext } from "../../context/authContext";
import { ActivityIndicator } from "react-native-web";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);
  const handleSignUp = async () => {
    setLoading(false);
    if (!email || !password || !email) {
      setError(false);
      return setError("All values are required!");
    }
    try {
      let data = { email, password, name };
      // test the email
      const emailValidation = validateEmail(email);
      if (!emailValidation) {
        setLoading(false);
        return setError("Please enter valid email address");
      }
      const res = await signUp(data);
      console.log(res, "line 42 Signup 42");
      // const res = await axios.post("/auth/signup", { data });
      // return navigation.navigate("Login");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={global.auth}>
        <TouchableOpacity
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="login" size={20} color="#fff" />
          <Text
            style={{
              color: "#fff",
              marginLeft: 10,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View style={[global.authCover]}>
          <Text style={global.authTitle}>Sign up</Text>
        </View>
        <View style={!error ? { display: "none" } : { display: "block" }}>
          <Text style={{ color: "#bbb", fontSize: 14 }}>{error}</Text>
        </View>
        <View>
          <TextInput
            style={global.FormGroup}
            value={name}
            placeholder="Name"
            onChangeText={(e) => setName(e)}
          />
          <TextInput
            style={global.FormGroup}
            value={email}
            placeholder="Email"
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={global.FormGroup}
            value={password}
            placeholder="Password"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={global.authBtn} onPress={handleSignUp}>
          <Text>{loading ? "Creating" : "Create"}</Text>
        </TouchableOpacity>
        <View style={global.loginSignUpCover}>
          <Text style={global.signupTextL}>
            By signing up you have agreed to our
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={global.authLSign}>Terms and Policies</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
