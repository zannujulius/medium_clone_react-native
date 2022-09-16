import React, { Component, useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import global from "../../../styles/global";
import { AuthContext } from "../../context/authContext";
import { validateEmail } from "../../methods/validation";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const hanldeLogin = async () => {
    setLoading(true);
    // use the reqex to check for type of email to user entered
    const emailVerifier = validateEmail(email);
    // check if both fields are provided
    if (!password || !email) {
      setLoading(false);
      return setError("Both fields are required");
    } else {
      if (!emailVerifier) {
        setLoading(false);
        return setError("Please provide a valid email");
      }
      const res = await signIn(email, password);
      const { message, statusMessage } = res;
      if (statusMessage == "error") {
        setLoading(false);
        return setError(message);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={global.auth}>
        <View style={[global.authCover, { marginTop: 90 }]}>
          <Text style={global.authTitle}>Login</Text>
        </View>
        <View style={!error ? { display: "none" } : { display: "block" }}>
          <Text style={{ color: "#bbb", fontSize: 14 }}>{error}</Text>
        </View>
        <View style={global.loginForm}>
          <TextInput
            style={global.FormGroup}
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={global.FormGroup}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <TouchableOpacity style={global.authBtn} onPress={hanldeLogin}>
          <Text style={global.authBtnText}>
            {loading ? `Logining` : "Login"}
          </Text>
        </TouchableOpacity>
        <View style={global.btnFPassword}>
          <TouchableOpacity>
            <Text style={global.formText}>Forgot your password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={global.loginSignUpCover}>
          <Text style={global.signupTextL}>Don't have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={[
                global.authLSign,
                { textDecorationLine: "underline", marginLeft: 10 },
              ]}
            >
              Sign up here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
