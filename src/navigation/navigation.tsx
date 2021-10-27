import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp, ParamListBase, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNavigationProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string
    > {
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
}

export type HomeScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabRouter, 'Home'>,
    StackNavigationProp<HomeScreenRouter>
>;

 export type BottomTabRouter = {
    Home: undefined,
    Notification: undefined,
    Profile: undefined,
}

export type Routers = {
    Login: undefined,
}

export type HomeScreenRouter = {
    Home:undefined,
    Scanner: undefined,

}