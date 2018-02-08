import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

    handleSubmit(formProps) {
        // Call action creator to sign up the user
        this.props.signupUser(formProps);
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <input className='form-control' {...email} />
                    {email.touched && email.error && <div className="alert alert-danger">{email.error}</div>}
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <input className='form-control' type='password' {...password} />
                    {password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}
                </fieldset>
                <fieldset className='form-group'>
                    <label>Confirm Password:</label>
                    <input className='form-control' type='password' {...passwordConfirm} />
                    {passwordConfirm.touched && passwordConfirm.error && <div className="alert alert-danger">{passwordConfirm.error}</div>}
                </fieldset>
                <button action='submit' className='btn btn-primary'>Sign Up!</button>
            </form>
        )
    }
};

function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    if(!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if(!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    return errors;
};

export default reduxForm({
    form: 'signup',
    fields: ['email','password','passwordConfirm'],
    validate
})(Signup);