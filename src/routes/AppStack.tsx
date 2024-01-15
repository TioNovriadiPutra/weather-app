import React from "react";
import { Stack } from "@utils/constant/navigation";
import Home from "@screens/Home";

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
