import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0D9347",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 74,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarStyle: {
            height: 70,
            paddingTop: 18,
          },
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leave"
        options={{
          title: "Leave",
          tabBarStyle: {
            height: 70,
            paddingTop: 15,
          },
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="apply"
        options={{
          title: "Apply",
          tabBarStyle: {
            height: 70,
            paddingTop: 15,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pencil" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarStyle: {
            height: 70,
            paddingTop: 15,
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
