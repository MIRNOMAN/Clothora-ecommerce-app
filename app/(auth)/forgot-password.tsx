import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

import Animated, {
  FadeInUp,
  FadeInDown,
  SlideInLeft,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const scale = useSharedValue(1);

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // ✅ Simple email validation
  const handleSend = () => {
    if (!email.includes("@")) {
      setError("Not a valid email address. Should be @-symbol.");
      return;
    }

    setError("");
    // 👉 API call / navigation here
    console.log("Valid email:", email);
  };

  return (
    <View className="flex-1 bg-white container">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Back */}
        <Animated.View
          entering={SlideInLeft.duration(500)}
          className="mt-10 mb-6"
        >
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrow-left" size={26} color="black" />
          </Pressable>
        </Animated.View>

        {/* Header */}
        <Animated.View entering={FadeInDown.duration(600)} className="mb-6">
          <Text className="text-4xl font-bold text-black">
            Forgot password
          </Text>
        </Animated.View>

        {/* Description */}
        <Animated.View entering={FadeInUp.delay(100)} className="mb-8">
          <Text className="text-gray-600 leading-6">
            Please, enter your email address. You will receive a link to
            create a new password via email.
          </Text>
        </Animated.View>

        {/* Email Input */}
        <Animated.View
          entering={FadeInUp.delay(200)}
          className={`bg-white p-4 rounded-lg shadow-sm border mb-2 ${
            error ? "border-red-400" : "border-gray-100"
          }`}
        >
          <Text className="text-xs text-gray-400 mb-1">Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#9B9B9B"
            className="text-black font-medium"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setError(""); // 🔥 typing করলে error hide
            }}
          />
        </Animated.View>

        {/* ❌ Error Message (conditional) */}
        {error ? (
          <Animated.Text
            entering={FadeInUp}
            className="text-red-500 text-xs mb-8"
          >
            {error}
          </Animated.Text>
        ) : (
          <View className="mb-8" />
        )}

        {/* Send Button */}
        <Animated.View entering={FadeInUp.delay(400)} style={buttonStyle}>
          <Pressable
            onPressIn={() => (scale.value = withSpring(0.95))}
            onPressOut={() => (scale.value = withSpring(1))}
            onPress={handleSend}
            className="bg-[#DB3022] p-4 rounded-full shadow-lg"
          >
            <Text className="text-white text-center font-semibold text-lg uppercase">
              Send
            </Text>
          </Pressable>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
