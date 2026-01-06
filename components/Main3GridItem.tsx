import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface GridItemProps {
  title: string;
  image?: any;
  isTextOnly?: boolean;
  delay?: number;
}

const Main3GridItem = ({ title, image, isTextOnly, delay = 0 }: GridItemProps) => {
  return (
    <Animated.View 
      entering={FadeInDown.delay(delay).duration(600)}
      className="flex-1 h-52"
    >
      <TouchableOpacity className="flex-1">
        {isTextOnly ? (
          <View className="flex-1 bg-white justify-center px-4">
            <Text className="text-red-600 text-3xl font-bold uppercase">{title}</Text>
          </View>
        ) : (
          <ImageBackground 
            source={image} 
            className="flex-1 justify-end p-4"
            resizeMode="cover"
          >
             {/* Dark overlay for readability */}
            <View className="absolute inset-0 bg-black/20" />
            <Text className="text-white text-2xl font-bold leading-tight">{title}</Text>
          </ImageBackground>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Main3GridItem;