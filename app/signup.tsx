import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.flex}>
      <Text style={styles.title}>facebook</Text>
      <View style={[styles.mainContainer, styles.borderRadiusTop]}>
        <View style={[styles.flex, styles.titleContainer]}>
          <Text style={styles.secondTitle}>Create a new account</Text>
          <Text style={styles.subtitle}>It&apos;s quick and easy.</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={[styles.flex, styles.inputs, { marginTop: 15 }]}>
          <TextInput style={styles.input} placeholder="First name" />
          <TextInput style={styles.input} placeholder="Last name" />
        </View>
      </View>
      <View style={[styles.mainContainer]}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInput}>Birthday</Text>
          <FontAwesome
            name="question-circle"
            size={16}
            color="gray"
            style={styles.icon}
          />
        </View>
        <View style={[styles.flex]}>
          <View style={[styles.flex, styles.inputs]}>
            <TextInput style={styles.smallerInput} placeholder="Month" />
            <TextInput style={styles.smallerInput} placeholder="Day" />
            <TextInput style={styles.smallerInput} placeholder="Year" />
          </View>
        </View>
      </View>
      <View style={[styles.mainContainer]}>
        <View style={styles.textInputContainer}>
          <Text style={[styles.textInput, {}]}>Gender</Text>
          <FontAwesome
            name="question-circle"
            size={16}
            color="gray"
            style={styles.icon}
          />
        </View>
        <View style={[styles.flex]}>
          <View style={[styles.flex, styles.inputs]}>
            <TextInput style={styles.smallerInput} placeholder="Male" />
            <TextInput style={styles.smallerInput} placeholder="Female" />
            <TextInput style={styles.smallerInput} placeholder="Custom" />
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={[styles.flex, styles.inputs]}>
          <TextInput
            style={styles.largerInput}
            placeholder="Mobile number or email"
          />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={[styles.flex, styles.inputs]}>
          <TextInput style={styles.largerInput} placeholder="New password" />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={[styles.textInputContainer]}>
          <Text style={styles.learnMore}>
            People who use our service may have uploaded your contact
            information to Facebook.
            <Text style={styles.descriptionHighlight}> Learn More.</Text>
            By clicking Sign Up, you agree to our
            <Text style={styles.descriptionHighlight}> Terms</Text>,
            <Text style={styles.descriptionHighlight}> Privacy Policy </Text>
            and <Text style={styles.descriptionHighlight}>Cookies Policy</Text>.
            You may receive SMS Notifications from us and can opt out any time.
          </Text>
        </View>
      </View>
      <View style={[styles.mainContainer, styles.borderRadiusBottom]}>
        <View style={[styles.flex, { marginVertical: 10 }]}>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)")}
            style={styles.signUpButton}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={{ marginVertical: 15 }}
          >
            <Text style={styles.signInButtonText}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1877F2",
    backgroundColor: "#ffffff04",
    marginBottom: 20,
  },

  mainContainer: {
    backgroundColor: "#fff",
    width: 500,
  },

  borderRadiusTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  borderRadiusBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  secondTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },

  subtitle: {
    color: "#000000a4",
  },

  titleContainer: {
    borderColor: "#03030322",
    borderBottomWidth: 2,
    padding: 10,
    borderTopLeftRadius: 10,
  },

  input: {
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },

  smallerInput: {
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    width: 140,
    backgroundColor: "#fff",
  },

  largerInput: {
    height: 40,
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    width: 460,
    backgroundColor: "#fff",
  },

  inputs: {
    marginBottom: 15,
    flexDirection: "row",
    gap: 20,
  },

  textInputContainer: {
    flexDirection: "row",
    gap: 5,
  },

  textInput: {
    marginLeft: 20,
  },

  icon: {
    marginTop: 2,
  },
  learnMore: {
    marginLeft: 20,
    width: 460,
    color: "rgba(0, 0, 0, 0.69)",
  },

  descriptionHighlight: {
    color: "#2750aeff",
  },

  signUpButton: {
    backgroundColor: "#1aad10ff",
    paddingHorizontal: 60,
    borderRadius: 4,
    paddingVertical: 4,
  },

  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },

  signInButtonText: {
    color: "#009dffff",
    fontSize: 18,
  },
});
