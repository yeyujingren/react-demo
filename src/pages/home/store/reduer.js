
import { fromJS } from 'immutable';


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    recommendWrite: [],
    articlePage: 1
})
export  default (state = defaultState,action) => {

    switch(action.type) {
        case 'change_home_data':
            // console.log(action);
            // state.set('topList',fromJS(action.topicList))
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                recommendWrite: fromJS(action.recommendWrite)
            })
        case 'add_home_list': 
            // return state.set('articleList',state.get('articleList').concat(action.list))
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.page
            })
        default :
            return state;
    }
}