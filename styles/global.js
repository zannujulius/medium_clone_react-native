import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //   auth
  auth: {
    flex: 1,
    padding: 20,
    height: "100%",
    backgroundColor: "#0e0e0e",
  },
  authCover: {
    width: "100%",
    height: 60,
    marginBottom: 10,
  },
  authTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  FormGroup: {
    marginVertical: 5,
    width: "100%",
    height: 60,
    fontSize: 15,
    color: "#fff",
    paddingHorizontal: 10,
    // backgroundColor: "#080808",
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
  btnFPassword: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginTop: 20,
  },
  formText: {
    color: "#fff",
  },
  loginSignUpCover: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextL: {
    color: "#fff",
    fontSize: 13,
  },
  authLSign: {
    color: "#fff",
  },
  authBtn: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  authBtnText: {
    color: "#0e0e0e",
    fontWeight: "bold",
    fontSize: 16,
  },
  policy: {
    color: "#fff",
  },
  loginNav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: "100%",
    height: 50,
    borderColor: "green",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  navLinkText: {
    color: "#020202",
    fontSize: 19,
    fontWeight: "bold",
  },
  navLinkIcon: {
    width: 40,
    marginRight: 10,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#777777",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  options: {
    marginTop: 20,
    width: "100%",
    height: 50,
    // borderWidth: 1,
    // borderColor: "green",
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  optionsCover: {
    borderRadius: 20,
    width: "auto",
    backgroundColor: "#eee",
    marginHorizontal: 10,
  },
  optonsText: {
    padding: 7,
    marginHorizontal: 10,
    borderColor: "red",
    fontSize: 11,
  },
  // author
  author: {
    width: "100%",
    position: "relative",
    paddingHorizontal: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 9,
  },
  authorCover: {
    width: 90,
    height: 90,
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  authorPostCover: {
    position: "absolute",
    right: 8,
    width: 18,
    height: 18,
    backgroundColor: "#1a1a1a",
    borderRadius: 9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  authorPostNumber: {
    color: "#fff",
    textAlign: "center",
    fontSize: 11,
  },
  authorImageCover: {
    width: 60,
    height: 60,
    borderRadius: 50,
    shadowColor: "#777777",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  authorImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  authorDetails: {
    width: "100%",
  },
  authorName: {
    textAlign: "center",
    color: "#3a3a3a",
    fontSize: 12,
    paddingHorizontal: 5,
  },
  // listcard
  listcard: {
    paddingHorizontal: 10,
  },
  listCardItem: {
    paddingVertical: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  listCardTop: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  listImageCover: {
    width: 25,
    height: 25,
    overflow: "hidden",
    borderRadius: 12.5,
  },
  listAuthorImage: {
    width: "100%",
    height: "100%",
  },
  listText: {
    color: "#292929",
    fontWeight: "500",
    marginLeft: 10,
    fontSize: 13,
  },
  listCardCenter: {
    width: "100%",
    paddingVertical: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listCaption: {
    width: "79%",
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
  },
  listCaptionText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  listPostCover: {
    width: "20%",
    height: 70,
  },
  listPostImage: {
    width: "100%",
    height: "100%",
  },
  listCardBottom: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  listBottomText: {
    color: "#5f5f5f",
    fontSize: 11,
  },
  navListNewCover: {
    backgroundColor: "dodgerblue",
    width: 90,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  navListNewBtn: {
    color: "#fff",
    fontSize: 15,
  },
  bookmarkTab: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkTabBtn: {
    marginHorizontal: 10,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  bookmarkTabBtnText: {
    color: "#aaa",
  },
  activeBookMarkText: {
    color: "black",
  },
  activeBookmarkTabBtn: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  bookmartTabContentCover: {
    position: "relative",
  },
  bookmartTabContent: {
    display: "flex",
    width: "100%",
    position: "absolute",
    padding: 15,
  },
  nonActivebookmarkConrent: {
    display: "none",
  },
  bookmarkTabContentCover: {
    width: "100%",
    backgroundColor: "green",
  },
  // saved Post
  savedPostCover: {
    backgroundColor: "#fff",
    shadowColor: "#aaa",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 9,
  },
  savedPostTop: {
    padding: 15,
  },
  savedPostTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  savedPostCountText: {
    color: "#9e9e9e",
    marginRight: 10,
  },
  savedPostCount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  savedPostImageCover: {
    width: "100%",
    height: 120,
  },
  search: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchTop: {
    display: "flex",
    flexDirection: "row",
    height: 37,
    borderRadius: 15,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    width: "100%",
    marginTop: 10,
    marginBottom: 15,
  },
  searchIconCover: {
    width: "5%",
    marginHorizontal: 5,
  },
  searchInputCover: {
    width: "90%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
  },
  follow: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  followTitle: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
  followItem: {
    width: 130,
    height: "auto",
    borderColor: "green",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  followImageCover: {
    width: "100%",
    height: 120,
  },
  followImage: {
    width: "100%",
    height: "100%",
  },
  followNameCover: {
    marginVertical: 4,
    width: "100%",
    height: "auto",
  },
  followNameText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#494949",
  },
  followTitleCover: {
    width: "100%",
    height: "auto",
    marginBottom: 5,
  },
  followTitleText: {
    color: "#777777",
    fontSize: 12,
  },
  followBtn: {
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
    height: 27,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  followBtnText: {
    color: "#27a327",
    fontSize: 12,
  },
  // highLight
  highLight: {
    backgroundColor: "#0f0f0f",
    padding: 20,
  },
  highLightCaption: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  highLightSubtext: {
    color: "#777777",
    marginVertical: 20,
  },
  HighlightItem: {
    width: 210,
    height: "auto",

    marginHorizontal: 10,
  },
  HighlightImageCover: {
    width: "100%",
    height: 150,
  },
  HighlightImage: {
    width: "100%",
    height: "100%",
  },
  HighlightNameCover: {
    width: "100%",
    height: "auto",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  HighlightNameImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  HighlightNameText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
  },
  HighlightTitleText: {
    width: "100%",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  HighlightDate: {
    color: "#777777",
    fontSize: 12,
  },
  HighlightBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  HighlightTime: {
    color: "#777777",
    fontSize: 12,
  },
});

export default styles;
