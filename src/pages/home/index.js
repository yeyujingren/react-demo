import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { getHomeInfo, toggleTopShow } from './store/actionCreators'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {

    handleScrollTop () {
        window.scrollTo(0,0)
    }

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
                {
                    this.props.scrollShow ? <BackTop onClick = { this.handleScrollTop }>^</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }
    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}


const mapState = (state) => ({
    scrollShow: state.getIn(['home','scrollShow'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData () {
        const action = getHomeInfo()
        dispatch(action)
    },
    changeScrollTopShow () {
        // const top = document.documentElement.scrollTop;
        // console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop > 100 ) {
            dispatch(toggleTopShow(true))
        } else {
            dispatch(toggleTopShow(false))
        }
    }
})


// export default Home
export default connect (mapState,mapDispatch) (Home)