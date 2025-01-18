import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

import "../global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    'IslandMoments': require('../assets/fonts/IslandMoments.ttf'),
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
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }} />
      <Stack.Screen name="Login" options={{
        headerShown: false
      }} />
      <Stack.Screen name="SignUp" options={{
        headerShown: false
      }} />
      <Stack.Screen name='(tabs)' options={{
        headerShown:false
      }}/>
    </Stack>
  );
}
