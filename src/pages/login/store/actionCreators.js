import Axios from "axios";

const changeLogin = () => ({
    type: 'change_login',
    value:true
})

export const logout= () => ({
    type: 'log_out',
    value: false
})

export const login = (account, password) => {
    return (dispatch) => {
        Axios.get('./api/login.json?account='+ account + '&password=' + password).then( 
            (res) => {
                const result = res.data.data;
                if(result) {
                    dispatch(changeLogin())
                } else {

                }
            }
        ).catch( (e) => {
            console.log('error:'+ e)
        })
    }
}