import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import * as actions from '../../actions/register/actionCreators';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {

    registerUser(userData) {
        this.props.register(userData);
    }

    render() {
        if (this.props.userData && this.props.userData.user && this.props.userData.user.email) {
            return <Redirect to={{ pathname: '/login', state: { user: this.props.userData.user } }} />
        }
        return (
            <section id='register'>
                <div className='app-form'>
                    <div className='row'>
                    <div className='col-md-5'>
                        <h1>Register</h1>
                        <RegisterForm errors={this.props.userData && this.props.userData.registrationErrors} submitCb={(userData) => this.registerUser(userData)}/>
                    </div>
                    <div className='col-md-6 ml-auto'>
                        <div className='image-container'>
                        <h2 className='catchphrase'>As our member you have access to most awesome places in the world.</h2>
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
        register: (userData) => {
            const action = actions.registerUser(userData);
           dispatch(action);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)