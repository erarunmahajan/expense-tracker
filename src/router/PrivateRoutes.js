import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import { Header } from '../components'


export const PrivateRoutes =({
    isAuthenticated,
    component: Component,
    ...rest
})=>{
    return(
        <Route {...rest} component={(props)=>(
            isAuthenticated ?<> <Header/> <Component {...props} /></> : <Redirect to="/login"/>
        )} />
    )
}

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.users.uid
})

export default connect(mapStateToProps)(PrivateRoutes)