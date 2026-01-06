import { useRouter } from "expo-router";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/sampleProducts";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Main1() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white">
      <Animated.View entering={FadeIn.duration(1000)}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
          }}
          className="h-[500px] justify-end p-6"
        >
          <Text className="text-white text-5xl font-black mb-4">
            Fashion{"\n"}sale
          </Text>
          <Pressable
            onPress={() => router.push("/main2")}
            className="bg-[#DB3022] w-40 py-3 rounded-full items-center shadow-lg"
          >
            <Text className="text-white font-bold uppercase">Check</Text>
          </Pressable>
        </ImageBackground>
      </Animated.View>

      <View className="py-6">
        <View className="flex-row justify-between items-center px-4 mb-4">
          <Text className="text-3xl font-bold">New</Text>
          <Text className="text-gray-400">View all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pl-4"
        >
          {products.map((item, index) => (
            <ProductCard key={item.id} index={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
