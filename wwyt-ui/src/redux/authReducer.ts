import {CommonThunkType, InferValueTypes} from "./store";
import {FormAction} from "redux-form";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

type InitialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | FormAction>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA',
        data: {userId, email, login, isAuth}
    } as const)
}

