import { StyleSheet, View } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { footerSelectorFamily } from "@store/footerState";
import FooterData from "@components/intermediate/FooterData";

type Props = {
  data?: any;
};

const Footer = ({ data }: Props) => {
  const footerData = useRecoilValue(footerSelectorFamily(data));

  return (
    <View style={styles.container}>
      {footerData.map((item, index) => (
        <FooterData key={index.toString()} item={item} index={index} />
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 17,
  },
});
