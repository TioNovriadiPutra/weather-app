import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { WeatherType } from "@utils/interface/Weather";
import { imageEndpoint } from "@utils/config/endpoint";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  city?: string;
  weather?: WeatherType;
  temp?: number;
};

const Content = ({ city, weather, temp }: Props) => {
  const contentAnim = useSharedValue(0);

  const contentAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(contentAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: contentAnim.value,
    };
  });

  useEffect(() => {
    contentAnim.value = withTiming(1, { duration: 1500 });
  }, []);

  return (
    <Animated.View style={[styles.container, contentAnimatedStyle]}>
      <Text style={styles.city}>{city}</Text>

      <View style={styles.content}>
        <Image
          source={{ uri: `${imageEndpoint}${weather?.icon}@2x.png` }}
          style={styles.image}
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>

      <Text style={styles.desc}>{weather?.description}</Text>
    </Animated.View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    width: 240,
    height: 240,
    borderRadius: 120,
    marginTop: 46,
    marginBottom: 42,
    backgroundColor: colors.Content,
    alignItems: "center",
    paddingTop: 20,
    gap: 3,
  },
  city: {
    fontFamily: fonts.Bold,
    fontSize: 40,
    color: colors.White,
  },
  image: {
    width: 145,
    height: 106,
  },
  temp: {
    fontFamily: fonts.Light,
    fontSize: 44,
    color: colors.Black,
  },
  desc: {
    fontFamily: fonts.Bold,
    fontSize: 20,
    color: colors.White,
  },
});
