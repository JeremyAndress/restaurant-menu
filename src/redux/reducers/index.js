import { combineReducers }  from "redux";
import tables from './tables';
import detail from './detail';
import order from './order';
import plates from './plate';

const rootReducers = combineReducers({
    tables, order, detail, plates
});
export default rootReducers;