import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

    constructor() {
        super();
        this.handelLogout = this.handelLogout.bind(this);
    }
 
    handelLogout() {
        this.props.history.push('/Login');
    }

    generateAuthButtons() {
        const { token, user } = this.props.userData;
        debugger;
        if (token || user.email) {
            return (<a className='nav-item nav-link clickable' onClick={this.handelLogout}>Logout</a>)
        }
        return (
            <>
                <Link className='nav-item nav-link active' to='/login'>Login <span className='sr-only'>(current)</span></Link>
                <Link className='nav-item nav-link' to='/register'>Register</Link>
            </>
        )
    }

    render() {
        debugger;
        return (
                <nav className='navbar navbar-dark navbar-expand-lg'>
                    <div className='container'>
                        <Link className='navbar-brand' to='/rentals'>Book It Now</Link>
                        <form className='form-inline my-2 my-lg-0'>
                            <input className='form-control mr-sm-2 header-search' type='search' placeholder='Try "New York"' aria-label='Search'></input>
                            <button className='btn btn-outline-success my-2 my-sm-0 btn-header-search' type='submit'>Search</button>
                        </form>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                            <div className='navbar-nav ml-auto'>
                                { this.generateAuthButtons() }
                            </div>
                        </div>
                    </div>
                </nav>
                )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

export default withRouter(connect(mapStateToProps)(Header))