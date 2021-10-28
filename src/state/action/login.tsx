import {LoginType} from "../action-type"
interface NORMAL_LOGIN{
    type:LoginType.NORMAL_LOGIN,
    payload:object
}
interface ON_ERROR{
    type:LoginType.ON_ERROR,
    payload:string
}
interface DO_LOGOUT{
    type:LoginType.DO_LOGOUT
}
interface ON_LOADING{
    type:LoginType.ON_LOADING
}
export type ActionLogin = NORMAL_LOGIN | ON_ERROR| DO_LOGOUT| ON_LOADING;
