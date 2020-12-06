import React from 'react';

// import the redux stuff
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    // discard the component-level state
    // state = {isSignedIn: null};

    // wire gapi to the project
    componentDidMount() {
        // load the library
        window.gapi.load('client:auth2', () => {
            // a callback function when the gapi client library has finished loading.
            // we then use the client to initialize the app with cliendID
            // async function that returns a 'promise'
            window.gapi.client.init({
                client_id: '912716503173-5i9mj5tucjbduji99i728uf99iu9hv14.apps.googleusercontent.com',
                // the scope that OAuth wants to get access to the user
                scope: 'email'
            })
                // .then() will be invoked when gapi library is ready
                .then(() => {
                    // get a reference of OAuth object
                    this.auth = window.gapi.auth2.getAuthInstance();
                    // check if signed in. Update the component-level state
                    // then the browser re-renders.

                    // this.setState({isSignedIn: this.auth.isSignedIn.get()});

                    // immediately update auth state inside of redux store
                    this.onAuthChange(this.auth.isSignedIn.get());

                    // a listener that monitors the state of sign in
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    // a call back function that updates the signin state
    // onAuthChange = () => {
    //     this.setState({isSignedIn: this.auth.isSignedIn.get()});
    // };
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        // if (this.state.isSignedIn === null) {
        if (this.props.isSignedIn === null) {
            return null;
        // } else if (this.state.isSignedIn) {
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui purple google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

// the state argument is going to be null, true, or false.
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);