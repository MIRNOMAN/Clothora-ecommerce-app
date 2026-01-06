import { View, Text, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

import Animated, { FadeInUp } from 'react-native-reanimated';
import { ProductCard } from '@/components/product/ProductCard';
import { SectionHeader } from '@/components/home/SectionHeader';

export default function Main2() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#F9F9F9] pt-12">
      <Animated.View entering={FadeInUp} className="px-4 mb-8">
        <View className="relative rounded-2xl overflow-hidden shadow-sm">
          <Image source={{ uri: 'https://picsum.photos/600/300' }} className="w-full h-48" />
          <View className="absolute bottom-4 left-4">
            <Text className="text-white text-3xl font-black shadow-black">Street clothes</Text>
          </View>
        </View>
      </Animated.View>

      <SectionHeader 
        title="Sale" 
        subtitle="Super summer sale" 
        onPress={() => router.push('/main3')} 
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 mb-10">
        <ProductCard index={1} item={{ title: 'Evening Dress', price: 12, brand: 'Dorothy', image: 'https://picsum.photos/305/405', discount: 20 }} />
        <ProductCard index={2} item={{ title: 'Sport Shirt', price: 19, brand: 'Sitlly', image: 'https://picsum.photos/306/406', discount: 15 }} />
      </ScrollView>

      <SectionHeader 
        title="New" 
        subtitle="You've never seen it before!" 
        onPress={() => router.push('/main3')} 
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 mb-10">
        <ProductCard index={3} item={{ title: 'Summer Dress', price: 25, brand: 'LIME', image: 'https://picsum.photos/307/407' }} />
        <ProductCard index={4} item={{ title: 'Black Jacket', price: 45, brand: 'Zara', image: 'https://picsum.photos/308/408' }} />
      </ScrollView>
    </ScrollView>
  );
}