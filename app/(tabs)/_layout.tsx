import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons';

export default function TabLayout() {
  return (
  
    <Tabs
      screenOptions = {{
        headerShown: false,
        tabBarActiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name = "discover"
        options = {{
          title: 'Discover',
          tabBarIcon: ({color, size}) => (
            <Ionicons name = "musical-notes" color = {color} size = {size} />
          ),
        }}
      />

      <Tabs.Screen
        name = "map"
        options = {{
          title: 'Map',
          tabBarIcon: ({color, size}) => (
            <Ionicons name = "map" color = {color} size = {size} />
          ),
        }}
      />

      <Tabs.Screen
        name = "saved"
        options = {{
          title: 'Saved',
          tabBarIcon: ({color, size}) => (
            <Ionicons name = "heart" color = {color} size = {size} />
          ),
        }}
      />  
    </Tabs>
  );
}
