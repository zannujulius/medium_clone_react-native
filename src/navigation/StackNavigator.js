import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
const Stack = createNativeStackNavigator();

// Home
import List from "../components/screens/List";
import ListDetails from "../components/screens/List/ListDetails/ListDetails";
// Profile
import User from "../components/screens/User";

// ReadList
import ReadList from "../components/screens/Readlist";
import SavedPost from "../components/screens/Bookmark/SavedPost";
// Search
import Test from "../components/screens/Test";
import Search from "../components/screens/Search";

// Interest
import Interest from "../components/screens/Interest";
import People from "../components/screens/People";
import { View, Text } from "react-native";
const headerOptions = {
  headerShown: false,
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={headerOptions} initialRouteName="List">
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="ListDetails" component={ListDetails} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

const ReadListStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="ReadList" component={ReadList} />
      <Stack.Screen name="SavedPost" component={SavedPost} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="SearchScreen" component={Search} />
    </Stack.Navigator>
  );
};

const StartStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Interest">
      <Stack.Screen name="Interest" options={{}} component={Interest} />
      <Stack.Screen
        options={{
          title: "Welcome to Medium",
          headerLeft: () => {
            return <></>;
          },
        }}
        name="Peoples"
        component={People}
      />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  ProfileStackNavigator,
  ReadListStackNavigator,
  SearchStackNavigator,
  StartStackScreen,
};
