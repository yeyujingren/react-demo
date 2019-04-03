import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reduer'


// immutable类型的数据
export default combineReducers ({
    header: headerReducer,
    home: homeReducer
})