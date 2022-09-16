import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "../../utils/axios";
import * as SecureStore from "expo-secure-store";

const Interest = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [interestValue, setInterestValue] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedBg, setSelectedBg] = useState(false);
  const [interestCount, setInterestCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedLength, setSelectedLength] = useState(0);
  const [selectedError, setSelectedError] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const token = await SecureStore.getItemAsync("userToken");
      const res = await axios.get("/interests", {
        headers: {
          "Auth-token": token,
        },
      });
      const { interest } = res.data;
      setData(interest);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const handleInterest = async (e, num) => {
    // if the item exists
    // then we remove it from the array
    if (interestValue.indexOf(e) !== -1) {
      // get the index of the item in the array
      const index = interestValue.indexOf(e);
      // get the filtered item from the array interest value
      const filterArr = interestValue.filter((item, id) => id !== index);
      // return the filterArr
      setInterestValue([...filterArr]);
      // get the current the id the item
    } else {
      // if the item doesnt exist spread the previous item
      // then add the current item
      return setInterestValue([...interestValue, e]);
    }
  };

  const hanldeNext = async () => {
    if (interestValue.length <= 3) {
      setError("Please select more than 3 interest");
      return setSelectedError(true);
    } else {
      try {
        const token = await SecureStore.getItemAsync("userToken");
        let data = interestValue;
        const res = await axios.post("/interests", data, {
          headers: {
            "Auth-Token": token,
          },
        });
        return navigation.navigate("Peoples");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View>
      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.toptitle}>
            <Text
              style={{
                marginTop: 7,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Select your interest
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "black",
                marginTop: 9,
                fontWeight: "300",
              }}
            >
              {interestValue.length} interest
            </Text>
          </View>

          <View
            style={
              selectedError == true
                ? [
                    {
                      width: "70%",
                      height: 35,
                      backgroundColor: "#ffb8b8",
                      borderRadius: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 10,
                    },
                  ]
                : null
            }
          >
            <Text
              style={{
                color: "red",
              }}
            >
              {error}
            </Text>
          </View>
          <View style={styles.interestcontainer}>
            {data.map((item, indexNumber) => (
              <TouchableOpacity
                key={indexNumber}
                style={styles.pile}
                onPress={() => {
                  handleInterest(item, indexNumber);
                  setSelectedIndex(indexNumber);
                }}
              >
                <Text style={styles.interest}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/*  Next Button */}
          <TouchableOpacity style={styles.nextbutton} onPress={hanldeNext}>
            <Text style={styles.nextbtntext}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    height: "100%",
    backgroundColor: "#eee",
    alignItems: "center",
    position: "relative",
  },
  pile: {
    marginVertical: 5,
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 7,
  },
  interest: {
    color: "green",
  },
  interestcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "90%",
    margin: "auto",
  },
  toptitle: {
    display: "flex",
    alignItems: "center",
    borderBottomColor: "#eee",
    marginBottom: 15,
  },
  nextbutton: {
    position: "absolute",
    bottom: 40,
    borderRadius: 20,
    backgroundColor: "green",
    width: "90%",
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nextbtntext: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
