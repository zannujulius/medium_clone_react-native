import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export { AuthStackNavigator };
