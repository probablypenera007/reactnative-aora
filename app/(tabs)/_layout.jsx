import { View, Text } from 'react-native'
import {Tabs, Redirect} from 'expo-router'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabsLayout = () => {
  return (
    <>
    <Tabs>
    
          
    </Tabs>
    </>
  )
}

export default TabsLayout