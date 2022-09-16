import React, { useEffect, useState, useRef, useReducer, useMemo } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Loader from "./src/components/Loader/Loader";

// React Native Navigation
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthStackNavigator } from "./src/navigation/AuthNavigator";
import BottomTabNavigator from "./src/navigation/TabNavigator";
import * as SecureStore from "expo-secure-store";
import axios from "./src/utils/axios";
import { AuthContext } from "./src/context/authContext";
import { StartStackScreen } from "./src/navigation/StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);
  const initialState = {
    isloading: true,
    userName: null,
    userToken: null,
  };

  const authReducer = (prevState, action) => {
    switch (action.type) {
      //incase the user is opening the app for the first time
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.userToken,
          isloading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          isloading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isloading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
          isloading: false,
        };
    }
  };
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const authContext = useMemo(() => ({
    signIn: async (email, password) => {
      try {
        let data = { email, password };
        const res = await axios.post("/auth/signin", data);
        const { statusMessage } = res.data;
        if (statusMessage == "error") {
          return res.data;
        } else {
          const { token, statusMessage } = res.data;
          await SecureStore.setItemAsync("userToken", token);
          dispatch({
            type: "LOGIN",
            userToken: token,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    signOut: () => {
      userToken: null;
      isloading: false;
      dispatch({ type: "LOGOUT" });
    },
    signUp: async (data) => {
      try {
        const res = await axios.post("/auth/signup", data);
        // console.log(res.data);
      } catch (err) {
        return err;
      }
      // userToken: "ala";
      // isloading: false;
    },
  }));

  useEffect(() => {
    let userToken;
    userToken = null;
    setTimeout(async () => {
      try {
        await SecureStore.deleteItemAsync("userToken");
        userToken = await SecureStore.getItemAsync("userToken");
        console.log(userToken, "line 103");
      } catch (err) {
        console.log(err);
      }
      dispatch({ type: "RETRIEVE_TOKEN", userToken: userToken });
    }, 2000);
    return () => {
      componentMounted.current = false;
    };
  }, [componentMounted]);

  if (authState.isloading) {
    // <Loader/>s
    return (
      <>
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "black",
          }}
        >
          <ActivityIndicator size={"small"} color={"#fff"} />
        </View>
      </>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <SafeAreaProvider>
          {authState.userToken !== null ? (
            <BottomTabNavigator />
          ) : (
            <AuthStackNavigator />
          )}
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
