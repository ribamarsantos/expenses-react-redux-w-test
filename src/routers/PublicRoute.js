import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ isAuthenticaded, component: Component, ...rest}) => (

    <Route {...rest} component={ (props) => (
        isAuthenticaded ? (
            <Redirect to='/dashboard'/>
        ) : (
            <div>
                <Component {...props} />
            </div>
        )
      )}/> 

);

const mapStateToProps = (state) =>({
    isAuthenticaded: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)