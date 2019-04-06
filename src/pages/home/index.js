import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { getHomeInfo } from './store/actionCreators'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = "banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4634/164728948a52095cd70453d065ccd9e0a9f1ee8c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt = "" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                <BackTop></BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount () {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData () {
        const action = getHomeInfo()
        dispatch(action)
    }
})


// export default Home
export default connect (null,mapDispatch) (Home)