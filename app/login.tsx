import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const [countryCode, setCountryCode] = useState("+65");
  const [phoneNumber, setPhoneNumber] = useState("");
  const onSignin = async (type: SignInType) => {
    if (type == SignInType.Phone) {
    }
  };
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome back</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter the phone number associated with your account
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Mobile number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
        onPress={() => onSignin(SignInType.Phone)}
      >
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View
          style={{
            flex: 1,
            height: StyleSheet.hairlineWidth,
            backgroundColor: Colors.gray,
          }}
        />
        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
        <View
          style={{
            flex: 1,
            height: StyleSheet.hairlineWidth,
            backgroundColor: Colors.gray,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => onSignin(SignInType.Email)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: "row",
            gap: 16,
            marginTop: 20,
            backgroundColor: "white",
          },
        ]}
      >
        <Ionicons name="mail" size={24} color={"black"} />
        <Text style={[defaultStyles.buttonText, { color: "black" }]}>
          Continue with email
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSignin(SignInType.Google)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: "row",
            gap: 16,
            marginTop: 20,
            backgroundColor: "white",
          },
        ]}
      >
        <Ionicons name="logo-google" size={24} color={"black"} />
        <Text style={[defaultStyles.buttonText, { color: "black" }]}>
          Continue with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSignin(SignInType.Apple)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: "row",
            gap: 16,
            marginTop: 20,
            backgroundColor: "white",
          },
        ]}
      >
        <Ionicons name="logo-apple" size={24} color={"black"} />
        <Text style={[defaultStyles.buttonText, { color: "black" }]}>
          Continue with Apple
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});