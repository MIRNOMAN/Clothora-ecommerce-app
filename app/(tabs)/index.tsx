import { Redirect } from "expo-router";

export default function Index() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text className="text-red-700">
    //     Edit app/index.tsx to edit this screen.
    //   </Text>
    // </View>

     <Redirect href="/(auth)/login" />
  );
}
