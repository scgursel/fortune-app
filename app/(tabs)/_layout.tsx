import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {

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
