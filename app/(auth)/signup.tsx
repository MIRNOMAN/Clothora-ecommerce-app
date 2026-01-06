import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import Animated, {
  FadeInUp,
  FadeInDown,
  SlideInLeft,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function SignUp() {
  const router = useRouter();
  const scale = useSharedValue(1);

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ScrollView
      className="flex-1 bg-white container"
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <Animated.View
        entering={SlideInLeft.duration(500)}
        className="mt-6 mb-8"
      >
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={26} color="black" />
        </Pressable>
      </Animated.View>

      {/* Header */}
      <Animated.View entering={FadeInDown.duration(600)} className="mb-8">
        <Text className="text-4xl font-bold mt-6 text-black">Sign up</Text>
      </Animated.View>

      {/* Inputs */}
      <View className="gap-5">
        <Animated.View entering={FadeInUp.delay(100)}>
          <TextInput
            placeholder="Name"
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200)}>
          <TextInput
            placeholder="Email"
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          />
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300)}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          />
        </Animated.View>
      </View>

      {/* Login Redirect */}
      <Animated.View entering={FadeInUp.delay(400)}>
        <Pressable
          onPress={() => router.push("/(auth)/login")}
          className="flex-row justify-end items-center mt-4"
        >
          <Text className="text-gray-600">
            Already have an account?{" "}
          </Text>
          <Text className="text-[#DB3022] font-semibold">Login</Text>
        </Pressable>
      </Animated.View>

      {/* Sign Up Button */}
      <Animated.View
        entering={FadeInUp.delay(500)}
        style={buttonStyle}
      >
        <Pressable
          onPressIn={() => (scale.value = withSpring(0.95))}
          onPressOut={() => (scale.value = withSpring(1))}
          className="bg-[#DB3022] p-4 rounded-full mt-8 shadow-lg"
        >
          <Text className="text-white text-center font-semibold text-lg uppercase">
            Sign Up
          </Text>
        </Pressable>
      </Animated.View>

      {/* Social Signup */}
      <Animated.View entering={FadeInUp.delay(600)} className="mt-12 mb-10">
        <Text className="text-center text-gray-500 mb-4">
          Or sign up with social account
        </Text>

        <View className="flex-row justify-center gap-6">
          <Pressable className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <FontAwesome name="google" size={24} color="#DB4437" />
          </Pressable>

          <Pressable className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <FontAwesome name="facebook" size={24} color="#4267B2" />
          </Pressable>
        </View>
      </Animated.View>
    </ScrollView>
  );
}
