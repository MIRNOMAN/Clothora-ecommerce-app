import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

import { SectionHeader } from "@/components/home/SectionHeader";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/sampleProducts";
import Animated, { FadeInUp } from "react-native-reanimated";
import { NewProductCard } from "@/components/product/NewProductCard";

export default function Main2() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#F9F9F9] pt-12">
      <Animated.View entering={FadeInUp} className="px-4 mb-8">
        <View className="relative rounded-2xl overflow-hidden shadow-sm">
          <Image
            source={{ uri: "https://picsum.photos/600/300" }}
            className="w-full h-48"
          />
          <View className="absolute bottom-4 left-4">
            <Text className="text-white text-3xl font-black shadow-black">
              Street clothes
            </Text>
          </View>
        </View>
      </Animated.View>

      <SectionHeader
        title="Sale"
        subtitle="Super summer sale"
        onPress={() => router.push("/main3")}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pl-4"
      >
        {products.map((item, index) => (
          <ProductCard key={item.id} index={index} item={item} />
        ))}
      </ScrollView>

      <SectionHeader
        title="New"
        subtitle="You've never seen it before!"
        onPress={() => router.push("/main3")}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pl-4 py-5"
      >
        {products.map((item, index) => (
          <NewProductCard key={item.id} index={index} item={item} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}
