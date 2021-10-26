import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Breathe from "./Breathe";
import {  View, StyleSheet } from "react-native"
const StaticAniamtion = () => {
  const rotation = useSharedValue(0);
  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration: 3000, easing: Easing.linear }), -1, false)
  }, [rotation.value])
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
        marginTop:5
     
      }}
    >
      <View style={{ width: 5, height: 5 }}>
        <Animated.View>
          <Breathe />
        </Animated.View>
      </View>
    </View>
  )
}

export default StaticAniamtion;