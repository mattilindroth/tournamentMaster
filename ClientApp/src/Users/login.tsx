import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

export interface ILoginProps {

};

export interface ILoginState {

};

export class Login extends React.Component<ILoginProps, ILoginState> {

    public render() {
        return (
            <form>
            <TextField required={true}>User name</TextField>
            <TextField required={true}>Password</TextField>
            <Button variant="contained" color="secondary" onClick={this.onCancel}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>Login</Button> 
            </form>
        );
    }

    public onCancel = ():void => {

    }

    public onSubmit = (): void => {

    }
};

