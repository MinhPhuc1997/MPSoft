import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootState } from "../state/reducers";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreenRouter, Routers } from './navigation';
import { Login } from "../screen/login";

const Tab = createBottomTabNavigator();
const OnBoardingStack = createStackNavigator<Routers>();
const HomeStack = createStackNavigator<HomeScreenRouter>();

const LoginScreen = () => {
  return (
    <OnBoardingStack.Navigator headerMode={"none"} >
      <OnBoardingStack.Screen component={Login} name={"Login"} />
    </OnBoardingStack.Navigator>
  )
}


const AppScreenNavigation = () => {
 // const IsLogined = useSelector((state: RootState) => state.login.IsLogin)
  return (
    (true) ? (<LoginScreen />) : null
  )
}

export default LoginScreen;

