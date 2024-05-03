import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl" >Hi ProbablyPenera!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "limegreen" }}>
        Go to profile
      </Link>
    </View>
  );
}
