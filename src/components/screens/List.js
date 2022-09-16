import React, { Component, useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global from "../../../styles/global";
import ListCard from "./List/ListCard";
import { token } from "../../utils/token";
import { UserContext } from "../../context/userContext";
import axios from "../../utils/axios";
import * as SecureStore from "expo-secure-store";

const List = ({ navigation, route }) => {
  const { userInterest, getArticles } = useContext(UserContext);
  const [interest, setInterest] = useState([]);
  const [pyf, setPYF] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    setLoading(true);
    let token;
    try {
      token = await SecureStore.getItemAsync("userToken");
      const res = await axios.get("/user", {
        headers: {
          "Auth-Token": token,
        },
      });
      let { statusMessage, message } = res.data;
      if (statusMessage === "error") {
        setError(message);
      }

      let { following, interests } = message;
      setInterest(interests);
      setPYF(following);
      const articles = await getArticles();
      setArticles(articles.articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#fff",
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          style={global.navLinkIcon}
          onPress={() => Alert.alert("clicked")}
        >
          <Ionicons name="notifications" size={22} color="#383838" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={{
          marginVertical: 7,
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {interest.map((e, index) => (
          <View style={global.optionsCover} key={index}>
            <Text style={global.optonsText}>{e}</Text>
          </View>
        ))}
      </ScrollView>
      {/* Authors */}
      <ScrollView
        horizontal={true}
        style={[global.author]}
        showsHorizontalScrollIndicator={false}
      >
        {/* author image */}
        {pyf.map((e, index) => (
          <View style={global.authorCover} key={e._id}>
            <View style={global.authorImageCover}>
              <Image
                source={{ uri: `${e.image}` }}
                style={global.authorImage}
              />
            </View>
            {/* <View style={global.authorPostCover}> */}
            {/* badger */}
            {/* <Text style={global.authorPostNumber}>4</Text> */}
            {/* </View> */}
            <View style={global.authorDetails}>
              <Text style={global.authorName}>{e.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* List Card */}
      <ListCard navigation={navigation} route={route} data={articles} />
      {/* <Button
        onPress={() =>
          navigation.navigate("ListDetails", {
            params: "julius",
          })
        }
        title="Details List Page "
      /> */}
    </ScrollView>
  );
};

export default List;
