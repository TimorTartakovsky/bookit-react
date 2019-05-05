import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import * as actions from '../../actions/register/actionCreators';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    loginUser(userData) {
        this.props.login(userData);
    }

    componentWillUpdate() {

    }

    render() {
        if (this.props.userData && this.props.userData.user && this.props.userData.user.email) {
            return <Redirect to={{ pathname: '/rentals', state: { user: this.props.userData.user } }} />
        } else if (this.props.userData && this.props.userData.token) {
            return <Redirect to={{ pathname: '/rentals', state: { user: this.props.userData.user } }} />
        }
        return (
            <section id="login">
                <div className="bwm-form">
                    <div className="row">
                    <div className="col-md-5">
                        <h1>Login</h1>
                        <LoginForm errors={this.props.userData && this.props.userData.registrationErrors} submitCb={(userData) => this.loginUser(userData)} />
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                        <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                        <img src='' alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userData) => {
            const action = actions.loginUser(userData);
           dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)