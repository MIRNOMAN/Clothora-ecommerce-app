import React from "react";
import { Dimensions, ImageBackground, Pressable, Text, View } from "react-native";
// নতুন লাইব্রেরি ইমপোর্ট
import Carousel from "react-native-reanimated-carousel";
import Animated, { FadeIn } from "react-native-reanimated";
import { useRouter } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");

type Banner = {
  id: string;
  title: string;
  image: string;
  buttonText: string;
  route: string;
};

const banners: Banner[] = [
  {
    id: "1",
    title: "Fashion\nSale",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    buttonText: "Check",
    route: "/main2",
  },
  {
    id: "2",
    title: "New\nArrivals",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    buttonText: "Shop Now",
    route: "/main2",
  },
  {
    id: "3",
    title: "Winter\nCollection",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    buttonText: "Explore",
    route: "/main2",
  },
];

export const BannerCarousel = () => {
  const router = useRouter();

  return (
    <View className="py-6 flex-1 items-center">
      <Carousel
        loop
        width={screenWidth}
        height={500}
        autoPlay={true}
        data={banners}
        scrollAnimationDuration={1000}
        autoPlayInterval={4000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => (
          <Animated.View entering={FadeIn.duration(800)} style={{ flex: 1, paddingHorizontal: 0 }}>
            <ImageBackground
              source={{ uri: item.image }}
              className="flex-1 justify-end p-6 rounded-xl overflow-hidden"
              imageStyle={{ borderRadius: 20 }}
            >
              <Text className="text-white text-5xl font-black mb-4">{item.title}</Text>
              <Pressable
                onPress={() => router.push("/main2")}
                className="bg-[#DB3022] w-40 py-3 rounded-full items-center shadow-lg"
              >
                <Text className="text-white font-bold uppercase">{item.buttonText}</Text>
              </Pressable>
            </ImageBackground>
          </Animated.View>
        )}
      />
    </View>
  );
};