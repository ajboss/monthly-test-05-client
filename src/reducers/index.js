import { combineReducers } from "redux";
// import { orderReducer } from "./orderReducer.js";
import tableReducer  from "./tableReducer";
import waiterReducer from "./waiterReducer";
import menuReducer from "./menuReducer";
import itemReducer from "./itemReducer";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
    // order: orderReducer
    tables: tableReducer,
    waiters: waiterReducer,
    menus: menuReducer,
    items: itemReducer,
    inputs: inputReducer
});

export default rootReducer;