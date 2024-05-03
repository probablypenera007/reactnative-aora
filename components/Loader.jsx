import { View, ActivityIndicator, Dimensions, Platform } from "react-native";

 
 const Loader = ({ isLoading }) => {
   return (
     <View
     className="absolute flex justify-center items-center w-full h-full bg-primary/60 z-10"
     style={{
       height: screenHeight,
     }}
     >
       <Text>Loader</Text>
     </View>
   )
 }
 
 export default Loader