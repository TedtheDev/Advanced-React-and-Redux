import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderNavBar(action) {
        return (
            <nav className='navbar navbar-light'>
                <ul className='nav navbar-nav'>
                    <li className='nav-item'>{action}</li>
                </ul>
            </nav>
        )
    };
    
    render() {
        return (
            (this.props.authenticated) ? this.renderNavBar('Sign Out') : this.renderNavBar('Sign In')
        )
        
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);