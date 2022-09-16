import React from "react";
import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import global from "../../../../styles/global";
const Highlight = () => {
  return (
    <View style={global.highLight}>
      <Text style={global.highLightCaption}>What we're reading today</Text>
      <Text style={global.highLightSubtext}>
        Highlights from all concers of Medium
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Highlight item */}
        {[1, 2, 3, 4, 5, 6].map((e, index) => (
          <View style={global.HighlightItem} key={index}>
            <View style={global.HighlightImageCover}>
              <Image
                source={require("../../../../assets/images/design.png")}
                style={global.HighlightImage}
              />
            </View>
            <View style={global.HighlightNameCover}>
              <Image
                source={require("../../../../assets/images/php.jpg")}
                style={global.HighlightNameImage}
              />
              <Text style={global.HighlightNameText}>Melody Wilding</Text>
            </View>
            <Text style={global.HighlightTitleText}>
              The Best way to Laern Anything comes Naturally
            </Text>
            <View style={global.HighlightBottom}>
              <Text style={global.HighlightDate}>22 October 2021</Text>
              <Text
                style={{
                  color: "#777777",
                }}
              >
                {" "}
                -{" "}
              </Text>
              <Text style={global.HighlightTime}>7 min read </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Highlight;
