import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("./assets/Fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/Fonts/Inter-Medium.ttf"),
    "Inter-Thin": require("./assets/Fonts/Inter-Thin.ttf"),
    "Inter-Bold": require("./assets/Fonts/Inter-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Text style={{fontFamily: "Inter-Medium"}}>E-Learning</Text>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
  
  },
});
