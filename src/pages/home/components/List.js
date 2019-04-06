import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoreList } from '../store/actionCreators'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends Component {
    render() {
        const { list, getMoreList,page } = this.props;
        return (
            <div>
                {
                    list.map((item,index) => {
                        return (
                            // <ListItem key = { item.get('id') }>
                            <ListItem key = { index } >
                                <img className="pic" src={ item.get('imgUrl') } alt="" />
                                <ListInfo>
                                    <h3 className="title" >
                                        { item.get('title') }
                                    </h3>
                                    <p className="desc">
                                        { item.get('desc') }
                                    </p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick = { () => { getMoreList(page) }  } >阅读更多</LoadMore>
            </div>

        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
    // or
    // list: state.get('home').get('articleList')
})

const mapDispatch = (dispatch) => ({
    getMoreList (page) {
        console.log(page)
        dispatch(getMoreList(page))
    }
})

// export default List
export default connect(mapState, mapDispatch)(List)