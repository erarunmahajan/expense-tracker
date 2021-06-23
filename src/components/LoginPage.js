import React from 'react'
import {connect} from 'react-redux'
import { startLogin } from '../actions/auth'


export const LoginPage =({startLogin})=>{
    return (
        <button onClick={startLogin}>Login using Google</button>
    )
}

const mapDispatchProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
})

export default connect(undefined, mapDispatchProps)(LoginPage)