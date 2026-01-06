import { View, Text, Pressable } from 'react-native';

export const SectionHeader = ({ title, subtitle, onPress }: any) => (
  <View className="flex-row justify-between items-end mb-4 px-4">
    <View>
      <Text className="text-3xl font-bold text-slate-900">{title}</Text>
      {subtitle && <Text className="text-gray-400 text-md">{subtitle}</Text>}
    </View>
    <Pressable onPress={onPress}>
      <Text className="text-slate-900 text-base">View all</Text>
    </Pressable>
  </View>
);