import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import { 
    LoginWrapper,
    LoginBox,
    LoginInput,
    LoginButton
} from './style'

class Login extends PureComponent {
    render () {
        const { loginState } = this.props;
        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="账号" ref = { (input) => { this.account = input } } />
                        <LoginInput placeholder="密码" type="password" ref = { (input) => { this.password = input } } />
                        <LoginButton onClick = { () => this.props.login(this.account,this.password) }>登录</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login (account,password) {
        dispatch(actionCreators.login(account.value,password.value))
    }
})

export default connect(mapState,mapDispatch)(Login)