import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {Action} from "redux";

const { createStore, combineReducers, applyMiddleware } = require("redux")

let rootReducer = combineReducers({
    form: formReducer
})

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferValueTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store
