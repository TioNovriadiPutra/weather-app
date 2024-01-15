import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today, {moment().format("DD MMM YYYY")}</Text>

      <Text style={styles.text}>{moment().format("HH:mm")}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 31,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.White,
  },
});
