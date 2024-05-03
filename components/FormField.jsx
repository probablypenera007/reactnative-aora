import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";


const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
          <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
          <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
            
          </View>
    </View>
  )
}

export default FormField