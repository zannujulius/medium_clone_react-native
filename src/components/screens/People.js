import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "../../utils/axios";
import { UserContext } from "../../context/userContext";

const People = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [userStatus, setUserStatus] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [tabIndex, setTabIndex] = useState(false);
  const [selectedPYF, setSelectedPYF] = useState([]);
  const { status } = useContext(UserContext);

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await axios.get("/users");
      const { statusMessage, message } = res.data;
      if (statusMessage === "error") {
        setError(message);
      } else if (statusMessage === "success") {
        setLoading(false);
        setData(message);
      }
    } catch (err) {
      setError(err);
    }
  }, []);

  const handleFollow = (id) => {
    if (selectedPYF.indexOf(id) === -1) {
      setSelectedPYF([...selectedPYF, id]);
    } else {
      let indexOfItem = selectedPYF.indexOf(id);
      const filteredPYF = selectedPYF.filter((item, id) => id !== indexOfItem);
      setSelectedPYF([...filteredPYF]);
    }
  };
  const handleFinish = async () => {
    setLoading(true);
    let data = selectedPYF;
    let token;
    try {
      token = await SecureStore.getItemAsync("userToken");
      if (!token) {
        setLoading(false);
        setError("Not authorized");
        return;
      }
      const res = await axios.post(
        "/pyf",
        { data },
        {
          headers: {
            "Auth-Token": token,
          },
        }
      );
      status();
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          alignItems: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              marginTop: 15,
            }}
          >
            Recommendation for you
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            Here are some top writers based on your interest.
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: "100%",
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
        >
          {loading ? (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <ActivityIndicator />
            </View>
          ) : (
            data.map((e, index) => (
              <View
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                }}
              >
                {/* left */}
                <View
                  style={{
                    width: "75%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* image */}
                  <View
                    style={{
                      width: "17%",
                      height: 50,
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      source={{
                        uri: `${e.image}`,
                      }}
                    />
                  </View>
                  {/* content */}
                  <View
                    style={{
                      width: "80%",
                      height: "auto",
                      display: "flex",
                    }}
                  >
                    {/* Name */}
                    <Text
                      style={{
                        color: "black",
                        fontSize: 13,
                        fontWeight: "700",
                        marginBottom: 1,
                      }}
                    >
                      {e.name.toUpperCase()}
                    </Text>
                    {/* caption */}
                    <Text
                      style={{
                        color: "#777777",
                        fontSize: 13,
                        lineHeight: 17,
                      }}
                    >
                      {`${e.description.substring(0, 90)}...`}
                    </Text>
                  </View>
                </View>
                {/* right */}
                <View
                  style={{
                    width: "23%",
                  }}
                >
                  <TouchableOpacity
                    style={
                      selectedPYF.indexOf(e._id) !== -1
                        ? {
                            width: "auto",
                            display: "flex",
                            borderColor: "green",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingVertical: 5,
                            paddingHorizontal: 3,
                            borderRadius: 20,
                            backgroundColor: "green",
                          }
                        : {
                            width: "auto",
                            borderWidth: 1,
                            borderColor: "green",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingVertical: 5,
                            paddingHorizontal: 3,
                            borderRadius: 20,
                          }
                    }
                    onPress={() => handleFollow(e._id)}
                  >
                    <Text
                      style={
                        selectedPYF.indexOf(e._id) !== -1
                          ? {
                              fontSize: 13,
                              color: "#fff",
                            }
                          : {
                              fontSize: 13,
                              color: "green",
                            }
                      }
                    >
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
      <View
        style={{
          width: "100%",
          height: 90,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          shadowColor: "#ccc",
          shadowRadius: 10,
          shadowOpacity: 0.5,
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 150,
            paddingVertical: 13,
            backgroundColor: "green",
            marginBottom: 10,
            borderRadius: "20",
          }}
          onPress={handleFinish}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            {loading ? `Finishing...` : "Finish"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default People;
// tabIndex
//                       ? {
//                          ,
//                         }
//                       : [
//                           {
//                             width: "auto",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             paddingVertical: 5,
//                             paddingHorizontal: 3,
//                             borderRadius: 20,
//                           },
//                           {
//                             backgroundColor: "green",
//                           },
//                         ]
