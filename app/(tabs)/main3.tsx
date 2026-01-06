import { getImage } from "@/utils/getImage";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";



export default function Main3() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Top main collection */}
      <ImageBackground
       source={getImage("main")}
        className="h-[470px] justify-center items-center"
      >
        {/* overlay */}
        <View className=" absolute inset-0" />
        <Text className="text-white text-4xl font-black uppercase">
          New collection
        </Text>
      </ImageBackground>

      {/* Bottom section with 3 images */}
      <View className="flex-row h-[400px]">
        {/* Left big image */}
        <ImageBackground
            source={getImage("mensHoodie")}
          className="flex-1 justify-center p-8 border-r border-b border-gray-100"
        >
          <View className="bg-black/20 absolute inset-0" />
          <Text className="text-white text-4xl font-black">
           Men&apos;s{"\n"}hoodies
          </Text>
        </ImageBackground>

        {/* Right top and bottom */}
        <View className="flex-1">
          <ImageBackground
            
            className="flex-1 justify-center bg-white p-6 border-b border-gray-100"
          >
            <View className="bg-white absolute inset-0" />
            <Text className="text-red-500 text-3xl font-bold">
              Summer{"\n"}sale
            </Text>
          </ImageBackground>

          <ImageBackground
           source={getImage("summerSale")}
            className="flex-1 justify-center p-6 border-b border-gray-100"
          >
            <View className="bg-black/20 absolute inset-0" />
            <Text className="text-white text-3xl font-bold">
              Black
            </Text>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}
