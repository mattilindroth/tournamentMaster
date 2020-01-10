import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar } from '@material-ui/core';
import Box from '@material-ui/core/Box'

export interface ITopMenuBarProps {
    isLoggedIn: boolean;
};

export interface ITopMenuBarState {

};

 
export class TopMenuBar extends React.Component<ITopMenuBarProps, ITopMenuBarState> {
    
    public render() {
        const loginButtonText = this.props.isLoggedIn ? "Login" : "Logout";    
        return (
            <AppBar position="static">
                <Toolbar>
                <Button variant="contained" color="primary">Tournaments</Button>
                <Button variant="contained" color="primary">Players</Button>
                <Button variant="contained" color="primary">Results</Button>
                <Box position="absolute" right="0px" >
                    <Button variant="contained" color="primary">{loginButtonText}</Button>
                </Box>
                </Toolbar>
            </AppBar>
        );
    }
};