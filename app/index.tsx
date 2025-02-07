import Input from "@/components/Input";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../assets/images/Katdict-logo.svg";
import { useState } from "react";
import { Link } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const login = async () => {
    if (email === "" || password === "") return;
    setloading(true);

  };

  return (
    <View className="flex-1 bg-white px-[10%] py-[10%]">
      <View className="flex items-center justify-center">
        <Icon width={100} />
        <Text className="text-xl  mt-4 font-barlow-semibold">Welcome Back</Text>
        <Text className="text-xl font-barlow-semibold ">
          To <Text className="text-brand">KATDICT</Text> Attendee
        </Text>
        <Text className="text-gray-400 text-xl mt-3 font-barlow-400 ">
          Hello there, sign in to continue
        </Text>
      </View>
      <View className="flex flex-col gap-4 mt-12">
        <Input value={email} onChangeText={(e:any)=>setEmail(e.value)} placeholder="Enter Email" />
        <Input value={password} onChangeText={(e:any)=>setPassword(e.value)} placeholder="Enter Password" secureTextEntry />
        <TouchableOpacity
          disabled={loading}
          onPress={()=>login()}
          className={` ${loading=== true? "bg-gray-300 text-gray-700" : "bg-brand"}  h-[50px] rounded-md flex items-center justify-center`}
        >
          <Text className="text-white font-barlow-semibold text-xl">Login</Text>
        </TouchableOpacity>

        <Link href="/(tabs)">Dashboard</Link>
      </View>
    </View>
  );
}
