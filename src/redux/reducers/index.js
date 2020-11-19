import { combineReducers }  from "redux";
import tables from './tables';
import detail from './detail';
import order from './order';
const rootReducers = combineReducers({
    tables, order, detail
});
export default rootReducers;