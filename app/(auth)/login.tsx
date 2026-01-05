import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Login() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="mt-10 mb-8">
        <Text className="text-4xl font-bold text-black">Login</Text>
      </View>

      <View className="space-y-4">
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
        onPress={() => router.push('/(auth)/forgot-password')}
        className="flex-row justify-end mt-4"
      >
        <Text className="text-gray-600">Forgot your password? </Text>
        <AntDesign name="arrow-right" size={16} color="#DB3022" />
      </Pressable>

      <Pressable 
        onPress={() => router.replace('/(tabs)')}
        className="bg-[#DB3022] p-4 rounded-full mt-8 shadow-lg shadow-red-300"
      >
        <Text className="text-white text-center font-semibold text-lg uppercase">Login</Text>
      </Pressable>

      <View className="mt-12">
        <Text className="text-center text-gray-500 mb-4">Or login with social account</Text>
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