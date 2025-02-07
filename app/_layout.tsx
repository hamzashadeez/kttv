import { Stack } from "expo-router";
import "../global.css";
import {
  useFonts,
  Barlow_400Regular,
  Barlow_700Bold,
  Barlow_900Black,
  Barlow_600SemiBold,
} from "@expo-google-fonts/barlow";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [loaded] = useFonts({
    Barlow_400Regular: Barlow_400Regular,
    Barlow_700Bold: Barlow_700Bold,
    Barlow_900Black: Barlow_900Black,
    Barlow_600SemiBold: Barlow_600SemiBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );

  // return <Stack screenOptions={{ headerShown: false }} />;
  
}
