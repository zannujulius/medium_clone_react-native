import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { token } from "./token";

const instance = axios.create({
  baseURL: "http://172.20.10.3:2000",
});

export default instance;
