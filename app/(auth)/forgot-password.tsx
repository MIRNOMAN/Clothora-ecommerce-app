import { View, Text, TextInput, Pressable } from 'react-native';

export default function ForgotPassword() {
  return (
    <View className="flex-1 bg-white p-4">
      <View className="mt-10 mb-8">
        <Text className="text-4xl font-bold text-black">Forgot password</Text>
      </View>

      <Text className="text-gray-600 mb-6 leading-5">
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>

      <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-2">
        <Text className="text-xs text-gray-400 absolute left-4 top-1">Email</Text>
        <TextInput 
          placeholder="Enter your email" 
          className="pt-2" 
        />
      </View>
      <Text className="text-red-500 text-xs mb-8">Not a valid email address. Should be @-symbol.</Text>

      <Pressable className="bg-[#DB3022] p-4 rounded-full shadow-lg shadow-red-300">
        <Text className="text-white text-center font-semibold text-lg uppercase">Send</Text>
      </Pressable>
    </View>
  );
}