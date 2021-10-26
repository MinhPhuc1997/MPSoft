import { LoginType } from "../action-type"
import { ActionLogin } from "../action/login"

const initState={
    token:"",
    login:false,
    AppError:"",
    loading:true,
}
 
const LoginReduces =(state=initState,action:ActionLogin)=>{
    switch (action.type) {
        case LoginType.NORMAL_LOGIN :
            return {
                ...state,
                login: true,
                token: action.payload,
            }
        case LoginType.ON_ERROR:
            return {
                ...state,
                AppError: action.payload,
            }
        case LoginType.DO_LOGOUT:
            return {
                ...state,
                login: false,
                token: "",
            }
        case LoginType.ON_LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
        default:
            break;
    }
    return {
        ...state,
    };
}

export default LoginReduces;