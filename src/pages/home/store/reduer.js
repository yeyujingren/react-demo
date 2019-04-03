
import { fromJS } from 'immutable';


const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: 'https://upload-images.jianshu.io/upload_images/226662-8b87d73b3d65e198.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: "手绘",
        imgUrl: 'https://upload-images.jianshu.io/upload_images/226662-8b87d73b3d65e198.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
})
export  default (state = defaultState,action) => {

    switch(action.type) {
        default :
            return state;
    }
}