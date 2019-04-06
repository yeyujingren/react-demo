
import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '',
    content: ''
});

export  default (state = defaultState,action) => {

    switch(action.type) {
        case 'change_detail' : 
            return state.merge({
                title: action.title,
                content: action.content
            })
        default :
            return state;
    }
}