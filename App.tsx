import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from "react-native";
import { Provider } from 'react-redux';
import { ThemeProvider } from '@shopify/restyle';
import LoadAssets from './src/components/LoadAssets';
import { theme } from './src/components';
import { store } from "./src/state/store";
import { LoginScreen } from './src/navigation';


const fonts = {
  "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),

};

export default function App() {

  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets fonts={fonts}>
        <Text style={{fontFamily:"Roboto-Black"}}>Welcome</Text>
        </LoadAssets>
      </ThemeProvider>
    </Provider>
  );
}
