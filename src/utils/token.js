import React from "react";
import * as SecureStore from "expo-secure-store";
export const token = async () => {
  let userToken;
  try {
    userToken = await SecureStore.getItemAsync("userToken");
    return userToken;
  } catch (error) {
    console.log(error);
  }
};
