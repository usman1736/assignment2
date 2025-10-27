import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
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
    },
    {
      name: "Room",
      logo: <FontAwesome name="video-camera" size={24} color="black" />,
    },
    {
      name: "Group",
      logo: <FontAwesome name="group" size={24} color="black" />,
    },
    {
      name: "Live",
      logo: <MaterialIcons name="live-tv" size={24} color="black" />,
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
    },
    {
      name: "...",
      logo: <Feather name="x" size={24} color="black" />,
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
        contentContainerStyle={styles.headingThreeContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {iconsOne.map((item, index) => (
          <TouchableOpacity key={index} style={styles.headingThreeIcons}>
            {item.logo}
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    flexDirection: "row",
    backgroundColor: "#d3d3d3",
    borderBottomWidth: 10,
    padding: 15,
    borderColor: "gray",
    alignItems: "center",
    gap: 10,
  },
  headingThreeIcons: {
    height: 40,
    width: 100,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
});
