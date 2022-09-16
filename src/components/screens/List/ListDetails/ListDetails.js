import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import axios from "../../../../utils/axios";
import * as SecureStore from "expo-secure-store";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { WebView } from "react-native-webview";

const getFonts = () =>
  Font.loadAsync({
    Lateef: require("../../../../../assets/fonts/Lateef-Regular.ttf"),
  });

const ListDetails = ({ navigation, route }) => {
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState({});
  const componentMounted = useRef(true);
  const [date, setDate] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setFontsLoaded(true);
    try {
      const res = await axios.get(`/articles/${route.params.id}`);
      let { statusMessage, message } = res.data;
      if (statusMessage === "error") {
        setError(message);
        setLoading(false);
      } else if (statusMessage === "success") {
        setData(message);
        setFontsLoaded(false);
        setAuthor(message.author);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

    return () => {
      componentMounted.current = false;
    };
  }, []);
  return loading ? (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator />
    </View>
  ) : fontsLoaded ? (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          right: 20,
          borderRadius: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 45,
          backgroundColor: "#ddd",
          zIndex: 1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="cross" size={20} color="#272727" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 70,
          }}
        >
          {/* top */}
          <View
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 4,
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                backgroundColor: "brown",
                borderRadius: 15,
                marginRight: 10,
              }}
              source={{
                uri: `${author.image}`,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#272727",
              }}
            >
              {author.name}
            </Text>
            <Text
              style={{
                fontSize: 11,
                marginLeft: 5,
                fontWeight: "400",
                color: "#636363",
              }}
            >
              4 min read
            </Text>
            <Text
              style={{
                fontSize: 11,
                marginLeft: 5,
                fontWeight: "400",
                color: "#636363",
              }}
            >
              29 October
            </Text>
          </View>
          {/* image */}
          <View>
            <Image
              source={{
                uri: `${data.postImage}`,
              }}
              style={{
                width: "100%",
                height: 240,
                marginVertical: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: "auto",
            }}
          >
            {/* <WebView
              style={{
                height: "auto",
              }}
              source={{
                html: `<p style='text-align: justify;color:#3f3f3f;font-size: 41;height: auto;line-height:1.3;'>${data.content}</p>`,
              }}
            /> */}

            <Text
              style={{
                padding: 5,
                fontSize: 20,
                lineHeight: 21,
                fontWeight: "400",
                fontFamily: "Lateef",
                textAlign: "justify",
                width: "100%",
              }}
            >
              {data.content}
            </Text>
          </View>
          <View>
            <Text>This are your likes</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => {
        setFontsLoaded(true);
      }}
      onError={console.warn}
    />
  );
};

export default ListDetails;
