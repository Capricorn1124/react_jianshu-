import {combineReducers} from'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as HomeReducer} from '../pages/home/store';
import {reducer as DetailReducer} from '../pages/detail/store';
import {reducer as Loginreducer} from '../pages/login/store'


const reducer=combineReducers({
    header:headerReducer,
    home:HomeReducer,
    detail:DetailReducer,
    login:Loginreducer
})
export default reducer;