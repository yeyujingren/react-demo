import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeDate = (result) => ({
    type: 'change_home_data',
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    recommendWrite: result.recommendWrite
})

const addHomeList = (result, page) => ({
    type: 'add_home_list',
    list: fromJS(result),
    page: fromJS(page)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data;
            dispatch(changeHomeDate(result));
            // console.log(result)
        })
    }
}



export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/getMoreList.json?page='+ page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page + 1))
            // dispatch(changeHomeDate(result));
            // console.log(result)
        })
    }
} 