import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reduer';
import detailReducer from '../pages/detail/store/reduer';
import loginReducer from '../pages/login/store/reduer';


// immutable类型的数据
export default combineReducers ({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})