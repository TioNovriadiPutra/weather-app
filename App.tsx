import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@utils/config/query";

SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppNav />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
