import { FooterDataType } from "@utils/interface/Footer";
import { selectorFamily } from "recoil";

const footerSelectorFamily = selectorFamily({
  key: "footerSelectorFamyly",
  get: (data: any) => () => {
    const finalData: FooterDataType[] = [
      {
        label: "Wind speed",
        value: data.wind.speed,
      },
      {
        label: "Humidity",
        value: data.main.humidity,
      },
      {
        label: "Visibility",
        value: data.visibility,
      },
      {
        label: "Air pressure",
        value: data.main.pressure,
      },
    ];

    return finalData;
  },
});

export { footerSelectorFamily };
