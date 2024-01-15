import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const ContentSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={249} height={49} animation="pulse" />

      <Skeleton
        width={240}
        height={240}
        style={styles.content}
        animation="pulse"
      />

      <Skeleton width={166} height={24} />
    </View>
  );
};

export default ContentSkeleton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    borderRadius: 120,
    marginTop: 46,
    marginBottom: 42,
  },
});
