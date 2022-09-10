import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import authReducer from "./auth.reducer";
const rootReducer = combineReducers({
    common: commonReducer,
    auth: authReducer
})
export default rootReducer