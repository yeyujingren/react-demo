import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actionCreators from './store/actionCreator'
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends PureComponent {
    render () {
        return (
            <DetailWrapper>
                <Header>
                    { this.props.title }
                </Header>
                <Content dangerouslySetInnerHTML = {{ __html: this.props.content }} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getDetail(id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail (id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState,mapDispatch)(withRouter(Detail))