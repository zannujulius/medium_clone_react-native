import React, { Component, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import global from "../../../styles/global";
import ListCard from "./List/ListCard";
import Follow from "./Search/follow";
import Highlight from "./Search/Highlights";
import { UserContext } from "../../context/userContext";

const Search = () => {
  const { getArticles } = useContext(UserContext);

  useEffect(async () => {
    const res = await getArticles();
    // console.log(res, "line 22");
  }, []);

  return (
    <View style={global.search}>
      <View style={global.searchTop}>
        <View style={global.searchIconCover}>
          <Ionicons name="ios-search" size={15} color="#afafaf" />
        </View>
        <View style={global.searchInputCover}>
          <TextInput style={global.searchInput} placeholder="search here" />
        </View>
      </View>
      {/* options */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <ScrollView
            horizontal={true}
            style={{
              marginVertical: 5,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
            showsHorizontalScrollIndicator={false}
          >
            {[1, 2, 3, 4, 5, 6, 8, 7].map((e, index) => (
              <View style={[global.optionsCover, { height: 30 }]} key={index}>
                <Text style={global.optonsText}>Creativity</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            borderColor: 1,
            borderWidth: "black",
            marginTop: 10,
            width: "100%",
            height: "auto",
            borderBottomColor: "black",
          }}
        >
          {/* <ListCard /> */}
        </View>

        {/* who to follow */}
        <Follow />

        {/* Highlights */}
        <Highlight />
      </ScrollView>
    </View>
  );
};

export default Search;
