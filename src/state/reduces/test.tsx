import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginType } from "../action-type";
import { ActionLogin } from "../actions/login";

const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
}

const IsLogin = (getData("IsLogin") != null) ? getData("IsLogin") : false;
const data = (getData("dataLogin") != null) ? getData("dataLogin") : "";
const initialState = {
    IsLogin: false,
    data: "",
    IsLoading: false,
}

const loginReducer = (state = initialState, action: ActionLogin) => {
    switch (action.type) {
        case LoginType.NORMAL_LOGIN:
            return {
                ...state,
                IsLogin: true,
                IsLoading:false,
                data: action.payload,
            }
        case LoginType.AUTO_LOGIN:
            return {
                ...state,
                IsLogin: true,
                IsLoading:false,
                data: action.error,
            }
        case LoginType.ON_ERROR:
            return {
                ...state,
                IsLoading: !state.IsLoading,
                AppError: action.payload,
            }
        case LoginType.DO_LOGOUT:
            return {
                ...state,
                IsLogin: false,
                data: null,
            }
        case LoginType.ON_LOADING:
            return {
                ...state,
                IsLoading: !state.IsLoading,
            }
        default:
            break;
    }
    return {
        ...state,
    };
};

export default loginReducer;