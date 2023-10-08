import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import History from "./components/History";
import ChatBox from "./components/ChatBox";

export default function App() {
  return (
    <View style={styles.container}>
      <History />
      <ChatBox />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232D3F",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#fff",
  },
});
