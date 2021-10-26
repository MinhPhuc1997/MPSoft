import React, { useRef, useState } from "react";
import Animated, { Easing, useAnimatedProps } from "react-native-reanimated";
import { Path } from "react-native-svg";

interface AnimatedStrokeProps {
  d: string;
  progress: Animated.SharedValue<number>;
  StrokeColor:string;
}
const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedStroke = ({ d, progress,StrokeColor }: AnimatedStrokeProps) => {
  const [length, setLength] = useState(0);
  const ref = useRef<Path>(null);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value),
  }));

  return (
    <AnimatedPath
      animatedProps={animatedProps}
      onLayout={() => setLength(ref.current!.getTotalLength())}
      ref={ref}
      d={d}
      stroke={StrokeColor}
      strokeWidth={1.5}
      strokeDasharray={length}
    />
  );
};

export default AnimatedStroke;