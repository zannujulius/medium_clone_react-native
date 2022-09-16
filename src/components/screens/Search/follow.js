import React from "react";
import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import global from "../../../../styles/global";
const Follow = () => {
  return (
    <View style={global.follow}>
      <Text style={global.followTitle}>who to follow</Text>
      <ScrollView
        horizontal={true}
        style={global.followCover}
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((e, index) => (
          <View style={global.followItem} key={index}>
            <View style={global.followImageCover}>
              <Image
                source={require("../../../../assets/images/zannuprofile.jpeg")}
                style={global.followImage}
              />
            </View>
            <View style={global.followNameCover}>
              <Text style={global.followNameText}>Melody Wilding</Text>
            </View>
            <View style={global.followTitleCover}>
              <Text style={global.followTitleText}>
                Author of TRUST YOURSELF
              </Text>
            </View>
            <TouchableOpacity
              style={global.followBtn}
              onPress={() => Alert.alert(`current index is ${index}`)}
            >
              <Text style={global.followBtnText}>Follow</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Follow;
