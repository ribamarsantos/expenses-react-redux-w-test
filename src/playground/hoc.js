import React from 'react';
import ReactDOM from 'react-dom';

export const Info = (props) => (
    <div>
      <h1> Info </h1>
      <p> Info: { props.message }</p>
    </div>
);

const updatePasswordInfo = (WrappedComponent) => {
    return ( props ) => (
        <div>
            { props.isAdmin && <p> This is a restricted message </p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isLogged ?  <WrappedComponent {...props} /> : <p> You are not logged. please click here!</p> }
        </div>
    )
}
// const AdminInfo = updatePasswordInfo(Info);
const AuthInfo  = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin message=" Atualize sua senha! " />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isLogged={false} message= " Atualize sua senha! " />, document.getElementById('app'));