import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@themes/colors";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
    paddingTop: 52,
    paddingBottom: 69,
    justifyContent: "space-between",
  },
});
