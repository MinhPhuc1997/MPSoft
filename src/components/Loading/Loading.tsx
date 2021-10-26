import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Breathe from "./Breathe";
import { Text, View, StyleSheet } from "react-native"
import { BlurView } from 'expo-blur';
import { opacity } from "@shopify/restyle";
const Loading = () => {
  const rotation = useSharedValue(0);
  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 3000, easing: Easing.linear }), -1, false)
  }, [rotation.value])
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  return (
    <View
   
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity:0.7,
       marginBottom:-25
      }}
    >
      <View style={{ width: 50, height: 50 }}>
        <Animated.View style={animatedStyle}>
          <Breathe />
        </Animated.View>
      </View>
     
        <Text >Loading</Text>
     

    </View>

  )
}

export default Loading;