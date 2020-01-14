import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Tournament } from '../Models/Tournament';

export interface ITournamentProps {

};

export interface ITournamentState {
    tournaments: Tournament[] | undefined;
};

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKED_URL + 'api/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});


class TournamentsList extends React.Component<ITournamentProps, ITournamentState> {
    readonly state: Readonly<ITournamentState> = 
    {
        tournaments: undefined,
    };

    async componentDidMount() {
        this.loadTournaments();
    };

    public render() {
        return (
            <div>
                
                <Button variant="contained" color="primary">Tournament</Button> 
            </div>);
    }

    public loadTournaments = (): void => {
        axiosInstance.get('Tournaments/')
        .then(async res => {
            let tournamentData: Tournament[] = res.data;
            this.setState({tournaments: tournamentData});
        })
        .catch(res => {
            return null;
        });
    } 

};

export default TournamentsList;