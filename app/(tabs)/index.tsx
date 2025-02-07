import HeaderContainer from "@/components/HeaderContainer";
import { ScrollView, Text, View } from "react-native";

const Home = () => {
  return (
    <View className="bg-light flex-1">
      <HeaderContainer>
        <Text>HAmzafd</Text>
        <Text>HAmzafd</Text>
      </HeaderContainer>
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        {/* status */}
        <View className="bg-white p-3 rounded-md px-4">
          <Text className="text-sm font-barlow-semibold">Today's Status</Text>
          {/* time */}
          <View className="flex flex-row py-2 items-center justify-between">
            <View className="flex flex-row items-center gap-2">
              <View className="bg-brand h-3 w-3 rounded-full " />
              <Text className="font-barlow-400 text-ms">Present</Text>
            </View>

            <View className="flex flex-row gap-1">
              <Text className="font-barlow-400 text-gray-400">In 09:00 AM</Text>
              <Text className="font-barlow-400 text-gray-400">-</Text>
              <Text className="font-barlow-400 text-gray-400">
                Out 04:00 PM
              </Text>
            </View>
          </View>
          {/* end time */}

          {/* progress */}
          <View className="rounded-full w-full h-2 bg-light my-1.5">
            <View className="rounded-full w-4/5 h-2 bg-brand" />
          </View>
          {/* end progress bar */}

          <Text className="text-sm font-barlow-400">
            4h 30m of 9h completed
          </Text>
        </View>  
        {/* end status */}

        {/* Grid */}
        <Text className="text-sm font-barlow-semibold text-gray-500 mt-5">
          Statistics
        </Text>
        <View className="flex flex-row w-full gap-4 mt-4">
          <View className="bg-white py-6 px-6 flex-1 rounded-lg">
            <Text>Working Days</Text>
            <Text className="text-lg font-barlow-semibold mt-3">
              19
              <Text className="text-sm text-gray-400 font-barlow-400">/22</Text>
            </Text>
          </View>
          <View className="bg-white py-6 px-6 flex-1 rounded-lg">
            <Text>Ontime Arrival</Text>
            <Text className="text-lg font-barlow-semibold mt-3">
              95
              <Text className="text-sm text-gray-400 font-barlow-400">%</Text>
            </Text>
          </View>
        </View>
        <View className="flex flex-row w-full gap-4 mt-4">
          <View className="bg-white py-6 px-6 flex-1 rounded-lg">
            <Text>Active Hours</Text>
            <Text className="text-lg font-barlow-semibold mt-3">
              145
              <Text className="text-sm text-gray-400 font-barlow-400"> hrs</Text>
            </Text>
          </View>
          <View className="bg-white py-6 px-6 flex-1 rounded-lg">
            <Text>Overtime</Text>
            <Text className="text-lg font-barlow-semibold mt-3">
              24
              <Text className="text-sm text-gray-400 font-barlow-400"> hrs</Text>
            </Text>
          </View>
        </View>
        {/* end Grid */}
      </ScrollView>
    </View>
  );
};

export default Home;
