
import {

  ScrollView,
  Text,
  View,
} from "react-native";

import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/sampleProducts";
import { BannerCarousel } from "@/components/banner/BannerCarousel";





export default function Main1() {
 

  return (
   <ScrollView className="flex-1 bg-white">
    <BannerCarousel />
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
