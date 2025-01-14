import { Tabs } from 'expo-router';
import React from 'react';

// import { useFonts } from 'expo-font';
// import { SplashScreen } from 'expo-router';

export default function TabLayout() {

  // const [loaded] = useFonts({
  //   'IslandMoments': require('../../assets/fonts/IslandMoments.ttf'),
  // });

  // React.useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) return null;
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{
        headerTitle: "Home",
        title: "home"
      }} />
      <Tabs.Screen name='FalSonucu' options={{
        headerTitle: "Falınız",
        title: "Falınız"
      }} />
      <Tabs.Screen name='FalYukleme' options={{
        headerTitle: "Fal Yükle"
      }} />
      <Tabs.Screen name='FalKonusu' options={{
        headerTitle: "Fal Konusu"
      }} />
    </Tabs>

  );
}
