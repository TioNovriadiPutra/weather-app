import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { FooterDataType } from "@utils/interface/Footer";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  item: FooterDataType;
  index: number;
};

const FooterData = ({ item, index }: Props) => {
  const itemAnim = useSharedValue(0);

  const itemAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(itemAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateY }],
      opacity: itemAnim.value,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      itemAnim.value = withTiming(1, { duration: 1000 });
    }, 200 * index);
  }, []);

  return (
    <Animated.View style={[styles.container, itemAnimatedStyle]}>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.value}>{item.value}</Text>
    </Animated.View>
  );
};

export default FooterData;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontFamily: fonts.Bold,
    fontSize: 14,
    color: colors.White,
  },
  value: {
    fontFamily: fonts.Regular,
    fontSize: 20,
    color: colors.White,
  },
});
