import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { WIDTH } from "@themes/styles";

const FooterSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={WIDTH / 4 - 20} height={49} />
      <Skeleton width={WIDTH / 4 - 20} height={49} />
      <Skeleton width={WIDTH / 4 - 20} height={49} />
      <Skeleton width={WIDTH / 4 - 20} height={49} />
    </View>
  );
};

export default FooterSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
  },
});
