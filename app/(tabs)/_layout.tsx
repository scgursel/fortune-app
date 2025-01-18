import { Tabs } from 'expo-router';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  return (
    <LinearGradient colors={['#1B1455', '#0E0A2C']} style={{ flex: 1 }}>
      <Tabs screenOptions={{
        tabBarStyle: { backgroundColor: 'transparent' },
        headerShown: true,
      }}>
        <Tabs.Screen name='index' options={{
          headerTitle: "Home",
          title: "home",
        }} />
        <Tabs.Screen name='FalSonucu' options={{
          headerTitle: "Falınız",
          title: "Falınız",
        }} />
        <Tabs.Screen name='FalYukleme' options={{
          headerTitle: "Fal Yükle",
        }} />
        <Tabs.Screen name='FalKonusu' options={{
          headerTitle: "Fal Konusu",
        }} />
        <Tabs.Screen name='HomePage' options={{
          headerTitle: "HomePage",
        }} />
        <Tabs.Screen name='Login' options={{
          headerTitle: "Login",
        }} />
        <Tabs.Screen name='SignUp' options={{
        }} />
      </Tabs>
    </LinearGradient>
  );
}
