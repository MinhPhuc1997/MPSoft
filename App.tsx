import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@shopify/restyle';
import { LoginScreen } from "./src/navigation"
import { LoadAssets } from './src/components';
import { theme } from './src/components';
import {store} from "./src/state/store";
import { assets  } from "./src/components/Assets";

const fonts = {
  "SFUIText-Bold": require("./assets/fonts/SFUIText-Bold.ttf"),
  "SFUIText-BoldItalic": require("./assets/fonts/SFUIText-BoldItalic.ttf"),
  "SFUIText-Heavy": require("./assets/fonts/SFUIText-Heavy.ttf"),
  "SFUIText-HeavyItalic": require("./assets/fonts/SFUIText-HeavyItalic.ttf"),
  "SFUIText-Light": require("./assets/fonts/SFUIText-Light.ttf"),
  "SFUIText-LightItalic": require("./assets/fonts/SFUIText-LightItalic.ttf"),
  "SFUIText-Medium": require("./assets/fonts/SFUIText-Medium.ttf"),
  "SFUIText-MediumItalic": require("./assets/fonts/SFUIText-MediumItalic.ttf"),
  "SFUIText-Regular": require("./assets/fonts/SFUIText-Regular.ttf"),
  "SFUIText-RegularItalic": require("./assets/fonts/SFUIText-RegularItalic.ttf"),
  "SFUIText-Semibold": require("./assets/fonts/SFUIText-Semibold.ttf"),
  "SFUIText-SemiboldItalic": require("./assets/fonts/SFUIText-SemiboldItalic.ttf"),
};

export default function App() {

  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets assets={assets} fonts={fonts}>
          <LoginScreen />
        </LoadAssets>
      </ThemeProvider>
    </Provider>
  );
}



