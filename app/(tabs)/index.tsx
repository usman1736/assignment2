import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const Home = () => {
  const iconsOne = [
    {
      name: "Reel",
      logo: <FontAwesome6 name="photo-film" size={24} color="black" />,
      id: "1",
    },
    {
      name: "Room",
      logo: <FontAwesome name="video-camera" size={24} color="black" />,
      id: "2",
    },
    {
      name: "Group",
      logo: <FontAwesome name="group" size={24} color="black" />,
      id: "3",
    },
    {
      name: "Live",
      logo: <MaterialIcons name="live-tv" size={24} color="black" />,
      id: "4",
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
      id: "5",
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
      id: "6",
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
      id: "7",
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
      id: "8",
    },
  ];
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Facebook</Text>
        <View style={[styles.logoContainer, styles.logoBorder]}>
          <FontAwesome name="search" size={24} color="black" />
        </View>
        <View style={[styles.logoContainer, styles.logoBorder]}>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </View>
      </View>
      <View style={styles.headingTwoContainer}>
        <Text style={styles.profilePicture}></Text>
        <Text style={styles.profilePictureText}>What&apos;s on Your Mind?</Text>
        <Entypo name="images" size={24} color="green" />
      </View>
      <ScrollView
        style={styles.headingThreeContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {iconsOne.map((item, index) => (
          <View key={index} style={styles.containerThree}>
            <TouchableOpacity style={styles.headingThreeIcons}>
              {item.logo}
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        style={styles.headingFourContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {iconsOne.map((item, index) => (
          <View key={index} style={styles.containerFour}>
            <TouchableOpacity
              style={styles.headingFourIcons}
            ></TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <FlatList
        data={iconsOne}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <View style={styles.post}>
            <Text style={styles.postHeader}></Text>
            <Text style={styles.postPicture}></Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1877F2",
    position: "absolute",
    left: 10,
  },
  logoBorder: {
    backgroundColor: "#d3d3d3",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  headingTwoContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginVertical: 20,
    justifyContent: "flex-end",
    marginRight: 30,
    marginLeft: 10,
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "black",
    position: "absolute",
    left: 0,
  },
  profilePictureText: {
    color: "gray",
    position: "absolute",
    left: 50,
    fontSize: 16,
  },
  headingThreeContainer: {
    height: 100,
    backgroundColor: "#d3d3d3",
    borderBottomWidth: 10,
    borderColor: "gray",
  },
  containerThree: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingThreeIcons: {
    flexDirection: "row",
    height: 40,
    width: 100,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    gap: 5,
  },
  headingFourContainer: {
    height: 300,
    backgroundColor: "#d3d3d3",
    borderBottomWidth: 10,
    borderColor: "gray",
  },
  containerFour: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingFourIcons: {
    height: 180,
    width: 130,
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  post: {
    width: "100%",
    height: 400,
    borderBottomWidth: 10,
    borderBottomColor: "gray",
  },
  postHeader: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  postPicture: {
    flex: 6,
    width: "100%",
    backgroundColor: "black",
  },
});
