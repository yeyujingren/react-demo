import Axios from "axios";

const changeDetail = (title,content) => ({
    type: 'change_detail',
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get('../api/detail.json?id=' + id).then((res) => {
            const result = res.data;
            dispatch(changeDetail(result.title, result.content))
            // console.log(res.data)
        }).catch( (e) => {
            console.log('error:'+e)
        } )
    }
}