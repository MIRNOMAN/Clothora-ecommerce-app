import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Main3() {
  return (
    <ScrollView className="flex-1 bg-white">
      <ImageBackground
        source={{ uri: "https://picsum.photos/500/500" }}
        className="h-64 justify-center items-center"
      >
        <View className="bg-black/20 absolute inset-0" />
        <Text className="text-white text-4xl font-black uppercase">
          New collection
        </Text>
      </ImageBackground>

      <View className="flex-row h-96">
        <View className="flex-1 bg-white justify-center p-8 border-r border-b border-gray-100">
          <Text className="text-[#DB3022] text-4xl font-black">
            Summer{"\n"}sale
          </Text>
        </View>
        <View className="flex-1">
          <View className="flex-1 bg-[#222] justify-center p-6 border-b border-gray-100">
            <Text className="text-white text-2xl font-bold">
              Men&apos;s{"\n"}hoodies
            </Text>
          </View>
          <View className="flex-1 bg-white justify-center p-6 border-b border-gray-100">
            <Text className="text-black text-2xl font-bold">Black</Text>
          </View>
        </View>
      </View>

      <Animated.View entering={FadeInDown.delay(300)} className="p-4">
        <Pressable className="bg-black py-4 rounded-full items-center">
          <Text className="text-white font-bold uppercase">
            View All Categories
          </Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}
