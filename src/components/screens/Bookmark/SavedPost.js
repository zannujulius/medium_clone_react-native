import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import global from "../../../../styles/global";

const SavedPost = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 15 }}>
      {[1, 2, 3, 4, 5, 6].map((e, index) => (
        <View style={global.savedPostCover} key={index}>
          <View style={global.savedPostTop}>
            <Text style={global.savedPostTitle}>Reading list</Text>
            <View style={global.savedPostCount}>
              <Text style={global.savedPostCountText}>3 stories</Text>
              <Foundation name="book-bookmark" size={16} color="dodgerblue" />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default SavedPost;
