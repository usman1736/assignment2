import SignUp from "@/app/signup";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text>click here for sign up page</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
