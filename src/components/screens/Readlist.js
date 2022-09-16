import React, { Component, useState } from "react";
import global from "../../../styles/global";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SavedPost from "./Bookmark/SavedPost";

const ReadList = ({ navigation, route }) => {
  return (
    <View style={{}}>
      <View style={global.nav}>
        <Text style={global.navLinkText}>Your List</Text>
        <TouchableOpacity
          style={global.navListNewCover}
          onPress={() => Alert.alert("clicked")}
        >
          <Text style={global.navListNewBtn}>New List</Text>
        </TouchableOpacity>
      </View>
      <View>
        <SavedPost />
      </View>
    </View>
  );
};

export default ReadList;
