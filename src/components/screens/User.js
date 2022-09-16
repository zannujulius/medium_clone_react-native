import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import HTMLView from "react-native-htmlview";
import { Entypo } from "@expo/vector-icons";

const User = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");
  // useEffect(() => {
  //   console.log(article, "line 27");
  // }, []);

  const handleTab = (e) => {
    setTabIndex(e);
  };

  function editorInitializedCallback() {
    // RichText.current?.registerToolbar(function (items) {
    //   // items contain all the actions that are currently active
    //   console.log(
    //     // "Toolbar click, selected items (insert end callback):",
    //     items
    //   );
    // });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }
  return (
    <View
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      {/* top button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          marginRight: 10,
          padding: 5,
          borderWidth: 1,
        }}
      >
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </TouchableOpacity>
      {/* create */}
      <View
        style={{
          backgroundColor: "green",
          width: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          borderRadius: 25,
          position: "absolute",
          bottom: 20,
          right: 10,
          zIndex: 1,
          shadowColor: "#777777",
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="plus" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* overlay */}
        <View
          style={{
            width: "100%",
            height: "100%",
            shadowColor: "#777777",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.4,
            // borderWidth: 20,
            shadowRadius: 3,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              marginTop: 50,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              borderBottomColor: "#eee",
              paddingVertical: 6,
              borderBottomWidth: 1,
            }}
          >
            <Pressable
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderRadius: 4,
                backgroundColor: "#181818",
                marginRight: 5,
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <RichEditor
              disabled={false}
              containerStyle={{}}
              ref={RichText}
              editorStyle={{
                color: "#272727",
              }}
              style={{
                minHeight: 350,
                maxHeight: 350,
              }}
              placeholder={"Start Writing Here"}
              onChange={(text) => setArticle(text)}
              editorInitializedCallback={editorInitializedCallback}
              // onHeightChange={handleHeightChange}
              pasteAsPlainText={true}
            />

            <RichToolbar
              style={{ height: 50, backgroundColor: "#F5FCFF" }}
              editor={RichText}
              disabled={false}
              iconTint={"black"}
              selectedIconTint={"green"}
              onPressAddImage={onPressAddImage}
              iconSize={20}
              actions={[
                actions.keyboard,
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.insertImage,
                actions.undo,
                actions.redo,
                actions.insertVideo,
              ]}
            />
          </View>
        </View>
      </Modal>
      {/* Profile cover */}
      <View>
        {/* Profile details */}
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              borderWidth: 1,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1638008084961-074c14787275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
            }}
          />
          <View
            style={{
              width: "100%",
              display: "flex",
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 5,
                marginBottom: 2,
              }}
            >
              James Allen
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#5f5f5f",
                  fontSize: 15,
                }}
              >
                92 Followers
              </Text>
              <Text
                style={{
                  color: "#5f5f5f",
                  fontSize: 15,
                  marginHorizontal: 10,
                }}
              >
                .
              </Text>
              <Text
                style={{
                  color: "#5f5f5f",
                  fontSize: 15,
                }}
              >
                298 Following
              </Text>
            </View>
          </View>
        </View>
        {/* Profile buttons */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              width: 180,
              backgroundColor: "black",
              borderRadius: 20,
              padding: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => Alert.alert("this was clicked")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
              }}
            >
              View Stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              width: 180,
              padding: 8,
              borderWidth: 1,
              borderColor: "#3f3f3f",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => Alert.alert("Edit Porfile was clicked")}
          >
            <Text
              style={{
                color: "#3f3f3f",
              }}
            >
              Edit your profiles
            </Text>
          </TouchableOpacity>
        </View>
        {/* profile button ends */}
        <View style={{}}>
          {/* tabs Title */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 25,
            }}
          >
            <TouchableOpacity
              style={
                tabIndex === 1
                  ? {
                      fontSize: 15,
                      marginHorizontal: 20,
                      paddingVertical: 8,
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }
                  : {
                      fontSize: 15,
                      marginHorizontal: 20,
                      paddingVertical: 8,
                    }
              }
              onPress={() => handleTab(1)}
            >
              <Text>Stories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                tabIndex === 2
                  ? {
                      fontSize: 15,
                      marginHorizontal: 20,
                      paddingVertical: 8,
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                    }
                  : {
                      fontSize: 15,
                      marginHorizontal: 20,
                      paddingVertical: 8,
                    }
              }
              onPress={() => handleTab(2)}
            >
              <Text>Lists</Text>
            </TouchableOpacity>
          </View>
          {/* tabs stories */}
          <View
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <ScrollView
              style={
                tabIndex === 1
                  ? {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      paddingHorizontal: 15,
                      paddingTop: 10,
                    }
                  : { display: "none" }
              }
            >
              <Text>the stories</Text>
            </ScrollView>
            {/* the reading */}
            <ScrollView
              style={
                tabIndex === 2
                  ? {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      paddingHorizontal: 15,
                      paddingTop: 10,
                    }
                  : { display: "none" }
              }
            >
              <Text>the Reading</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default User;
