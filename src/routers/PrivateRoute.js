import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({ isAuthenticaded, component: Component, ...rest}) => (

    <Route {...rest} component={ (props) => (
        isAuthenticaded ? (
            <div>
                <Header />    
                <Component {...props} />
            </div>
        ) : (
            <Redirect to='/' />
        )
      )}/> 

);

const mapStateToProps = (state) =>({
    isAuthenticaded: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)