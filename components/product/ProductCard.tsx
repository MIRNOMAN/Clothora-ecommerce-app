import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';

export const ProductCard = ({ item, index }: any) => {
  return (
    <Animated.View 
      entering={FadeInRight.delay(index * 100)} 
      className="w-[150px] mr-4 mb-4"
    >
      {/* Product Image Section */}
      <View className="relative shadow-sm">
        <Image 
          source={{ uri: item.image }} 
          className="w-full h-[155px] rounded-lg" 
          resizeMode="cover"
        />
        
        {/* Discount Badge */}
        {item.discount && (
          <View className="absolute top-2 left-2 bg-[#DB3022] px-2 py-1 rounded-full">
            <Text className="text-white text-[10px] font-bold">-{item.discount}%</Text>
          </View>
        )}

        {/* Favorite/Heart Button */}
        <Pressable className="absolute -bottom-4 right-0 bg-white p-2 rounded-full shadow-md">
          <Ionicons name="heart-outline" size={16} color="gray" />
        </Pressable>
      </View>

      {/* Product Info Section */}
      <View className="mt-5">
        {/* Rating Stars */}
        <View className="flex-row items-center mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons key={star} name="star" size={12} color="#FFBA49" />
          ))}
          <Text className="text-gray-400 text-[10px] ml-1">(10)</Text>
        </View>

        <Text className="text-gray-400 text-xs font-medium">{item.brand || 'Dorothy Perkins'}</Text>
        <Text className="font-bold text-lg text-black mt-1" numberOfLines={1}>
          {item.title || 'Evening Dress'}
        </Text>

        {/* Price Section */}
        <View className="flex-row items-center mt-1">
          <Text className="text-gray-400 line-through text-sm mr-2">15$</Text>
          <Text className="text-[#DB3022] font-bold text-sm">{item.price}$</Text>
        </View>
      </View>
    </Animated.View>
  );
};