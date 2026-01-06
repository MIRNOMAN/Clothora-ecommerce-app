import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import Animated, {
  FadeInDown,
  FadeInUp,
  SlideInLeft,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Login() {
  const router = useRouter();
  const scale = useSharedValue(1);

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="container"
      >
        {/* Back */}
        <Animated.View entering={SlideInLeft.duration(500)} className="mb-10">
          <AntDesign name="arrow-left" size={24} color="black" />
        </Animated.View>

        {/* Header */}
        <Animated.View entering={FadeInDown.duration(600)} className="mb-20">
          <Text className="text-5xl font-extrabold text-black tracking-tight">
            Login
          </Text>
        </Animated.View>

        {/* Inputs */}
        <View className="space-y-4">
          <Animated.View
            entering={FadeInUp.delay(100).duration(500)}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-50"
          >
            <Text className="text-gray-400 text-xs mb-1">Email</Text>
            <TextInput
              placeholder="muffin.sweet@gmail.com"
              className="text-black font-medium"
              placeholderTextColor="#9B9B9B"
            />
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(200).duration(500)}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-50"
          >
            <Text className="text-gray-400 text-xs mb-1">Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              className="text-black font-medium"
              placeholderTextColor="#9B9B9B"
            />
          </Animated.View>
        </View>

        {/* Forgot Password */}
        <Animated.View entering={FadeInUp.delay(300)}>
          <Pressable
            onPress={() => router.push("/(auth)/forgot-password")}
            className="flex-row justify-end items-center mt-4"
          >
            <Text className="text-black text-sm">Forgot your password? </Text>
            <AntDesign name="arrow-right" size={16} color="#DB3022" />
          </Pressable>
        </Animated.View>

        {/* Login Button */}
        <Animated.View entering={FadeInUp.delay(400)} style={buttonStyle}>
          <Pressable
            onPressIn={() => (scale.value = withSpring(0.95))}
            onPressOut={() => (scale.value = withSpring(1))}
            onPress={() => router.replace("/(tabs)")}
            className="bg-[#DB3022] p-4 rounded-full mt-8 shadow-lg"
          >
            <Text className="text-white text-center font-bold text-base uppercase tracking-widest">
              LOGIN
            </Text>
          </Pressable>
        </Animated.View>

        {/* Social Login */}
        <Animated.View entering={FadeInUp.delay(500)} className="mt-auto mb-20">
          <Text className="text-center text-gray-600 mb-1 font-medium">
            Or login with social account
          </Text>
          {/* Sign Up Link */}
          <Animated.View entering={FadeInUp.delay(450)}>
            <Pressable
              onPress={() => router.push("/(auth)/signup")}
              className="flex-row justify-center items-center my-6 mt-2"
            >
              <Text className="text-gray-600 text-base">
                Don’t have an account?{" "}
              </Text>
              <Text className="text-[#DB3022] font-semibold text-base">
                Sign up
              </Text>
            </Pressable>
          </Animated.View>

          <View className="flex-row justify-center gap-5">
            <Pressable className="bg-white px-8 py-4 rounded-3xl shadow-md">
              <FontAwesome name="google" size={28} color="#DB4437" />
            </Pressable>

            <Pressable className="bg-white px-8 py-4 rounded-3xl shadow-md">
              <FontAwesome name="facebook" size={28} color="#4267B2" />
            </Pressable>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
