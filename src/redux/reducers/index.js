import { combineReducers }  from "redux";
import tables from './tables';
import order from './order';
const rootReducers = combineReducers({
    tables, order
});
export default rootReducers;