import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import global from "../../../../styles/global";
import moment from "moment";
const ListCard = ({ navigation, route, data }) => {
  useEffect(() => {}, []);
  return (
    <View style={global.listcard}>
      {data.map((item, index) => (
        <TouchableOpacity
          style={global.listCardItem}
          key={item._id}
          onPress={() =>
            navigation.navigate("ListDetails", {
              id: item._id,
            })
          }
        >
          {/* list card center */}
          <View style={global.listCardCenter}>
            <View style={global.listCaption}>
              <View style={global.listCardTop}>
                <View style={global.listImageCover}>
                  <Image
                    source={{ uri: `${item.author.image}` }}
                    style={global.listAuthorImage}
                  />
                </View>
                <View style={global.listTextCover}>
                  <Text style={global.listText}>
                    {item.author.description.substring(0, 30)}...
                  </Text>
                </View>
              </View>
              <Text style={global.listCaptionText}>
                {item.content.substring(0, 60)}...
              </Text>
            </View>
            <View style={global.listPostCover}>
              <Image
                source={{ uri: `${item.postImage}` }}
                style={global.listPostImage}
              />
            </View>
          </View>
          {/* list card center */}
          <View style={global.listCardBottom}>
            <Text style={global.listBottomText}>4 days ago</Text>
            <Text style={global.listBottomText}>
              {""}. {""}
            </Text>
            <Text style={global.listBottomText}>
              {item.readingTime} min read
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListCard;
