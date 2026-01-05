import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="mt-10 mb-8">
        <Text className="text-4xl font-bold text-black">Sign up</Text>
      </View>

      <View className="space-y-4">
        <TextInput
          placeholder="Name"
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        />
        <TextInput
          placeholder="Email"
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        />
      </View>

      <Pressable
        onPress={() => router.push("/(auth)/login")}
        className="flex-row justify-end mt-4"
      >
        <Text className="text-gray-600">Already have an account? </Text>
        <AntDesign name="arrow-right" size={16} color="#DB3022" />
      </Pressable>

      <Pressable className="bg-[#DB3022] p-4 rounded-full mt-8 shadow-lg shadow-red-300">
        <Text className="text-white text-center font-semibold text-lg uppercase">
          Sign Up
        </Text>
      </Pressable>

      <View className="mt-12">
        <Text className="text-center text-gray-500 mb-4">
          Or sign up with social account
        </Text>
        <View className="flex-row justify-center space-x-6">
          <View className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <FontAwesome name="google" size={24} color="#DB4437" />
          </View>
          <View className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <FontAwesome name="facebook" size={24} color="#4267B2" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
