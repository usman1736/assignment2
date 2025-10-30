import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Facebook logo */}
      <Text style={styles.logo}>f</Text>

      {/* Input fields */}
      <TextInput
        style={styles.input}
        placeholder="Mobile number or email address"
        placeholderTextColor="#b0b3b8"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#b0b3b8"
        secureTextEntry
      />

      {/* Log In Button → goes to Home Tabs */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push('/(tabs)')}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgotten Password?</Text>
      </TouchableOpacity>

      {/* Create Account → goes to Signup Page */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.createText}>Create new account</Text>
      </TouchableOpacity>

      {/* Meta Text */}
      <Text style={styles.metaText}>Meta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  logo: {
    fontSize: 75,
    color: '#1877f2',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#1c1f26',
    color: '#fff',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 15,
    marginVertical: 8,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#1877f2',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  forgotText: {
    color: '#b0b3b8',
    marginVertical: 15,
    fontSize: 14,
  },
  createButton: {
    borderColor: '#1877f2',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 14,
    marginTop: 10,
  },
  createText: {
    color: '#1877f2',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  metaText: {
    color: '#b0b3b8',
    marginTop: 40,
    fontSize: 14,
  },
});
