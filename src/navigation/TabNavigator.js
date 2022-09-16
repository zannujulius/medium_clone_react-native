import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useReducer,
  useMemo,
} from "react";
import Home from "../components/screens/List";
import Profile from "../components/screens/User";
import {
  MainStackNavigator,
  ProfileStackNavigator,
  ReadListStackNavigator,
  SearchStackNavigator,
  StartStackScreen,
} from "./StackNavigator";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global from "../../styles/global";
import Interest from "../components/screens/Interest";
import * as SecureStore from "expo-secure-store";
import axios from "../utils/axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "../context/userContext";
import Test from "../components/screens/Test";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = ({ navigation }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [retrieveScreen, setRetrieveScreen] = useState(false);
  const componentMounted = useRef(true);

  const userContext = useMemo(() => ({
    status: async () => {
      try {
        let token = await SecureStore.getItemAsync("userToken");
        const res = await axios.patch(
          "/user",
          { status },
          {
            headers: {
              "Auth-Token": token,
            },
          }
        );
        const { statusMessage, message } = res.data;
        console.log(message.status, "line 54");
        setStatus(message.status);
      } catch (error) {
        console.log(error);
      }
    },
    userInterest: async () => {
      try {
        let token = await SecureStore.getItemAsync("userToken");
        const res = await axios.get("/user-interest", {
          headers: {
            "Auth-token": token,
          },
        });
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    getArticles: async () => {
      try {
        let token = await SecureStore.getItemAsync("userToken");
        const res = await axios.get("/articles");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  }));

  useEffect(async () => {
    let token;
    let userStatus;
    try {
      token = await SecureStore.getItemAsync("userToken");
      const res = await axios.get("/user", {
        headers: {
          "Auth-token": token,
        },
      });
      const { statusMessage, message } = res.data;
      if (statusMessage === "success") {
        let { status } = message;
        console.log(status, "Line 70");
        if (status === "user") {
          setLoading(false);
          setStatus("user");
        } else if (status === "guest") {
          setLoading(false);
          setStatus("guest");
        }
      }
    } catch (err) {
      console.log(err);
    }
    return () => {
      componentMounted.current = false;
    };
  }, []);

  if (loading) {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <UserContext.Provider value={userContext}>
      {status === "guest" ? (
        <StartStackScreen />
      ) : (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation, route }) => ({
            headerShown: true,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "md-home" : "md-home";
              } else if (route.name === "Profile") {
                iconName = focused
                  ? "person-circle-outline"
                  : "person-circle-outline";
              } else if (route.name === "Bookmark") {
                iconName = focused ? "bookmarks" : "bookmarks-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search";
              } else if (route.name === "Interest") {
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={MainStackNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name="Bookmark" component={ReadListStackNavigator} />
          <Tab.Screen name="Search" component={SearchStackNavigator} />
          <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        </Tab.Navigator>
      )}
    </UserContext.Provider>
  );
};

export default BottomTabNavigator;

//   return null;
//   <View
//     style={{
//       backgroundColor: "black",
//       width: "90%",
//       height: 45,
//       borderRadius: 20,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       marginTop: 8,
//     }}
//   >
//     <Text
//       style={{
//         color: "#fff",
//         fontSize: 17,
//       }}
//     >
//       Next
//     </Text>
//   </View>
// );

//   return guest === true ? (
//     <StartStackScreen />
//   ) : (
//
//   );
