import React from 'react';
import Button from '@material-ui/core/Button';
import { Tournament } from '../Models/Tournament';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import DateFormat from 'dateformat';
import {axiosInstance} from '../Shared/AxiosConfig';
import res from 'axios';
import { match } from 'react-router-dom'; 

interface IParams {
    id?: string;
}

export interface ITournamentViewProps {
    match?: match<IParams>;

}

export interface ITournamentViewState {
    tournament: Tournament |undefined;
}

export class TournamentView extends React.Component<ITournamentViewProps,ITournamentViewState> {
    readonly state: Readonly<ITournamentViewState> = 
    {
        tournament: undefined,
    };

    public componentDidMount() {
        const id = this.props.match?.params?.id;
        if(id)
            this.loadTournament(Number(id));
    }

    public render() {
        
        return (
            <div>
                
                <Paper>
                    <Typography variant="h3">{this.state.tournament?.name}</Typography>
                    <br/>
                    <Typography variant="body1">{this.state.tournament?.location}</Typography>
                </Paper>
            </div>
        );
    }

    public loadTournament = (id: number) => {
        axiosInstance.get('tournament/' + id)
        .then(res => {
            console.log(res);
            let tournamentData: Tournament = res.data;
            console.log('tournamentData',tournamentData);
            this.setState({tournament: tournamentData});
        })
        .catch(res => {
            return null;
        });
        //return Promise.resolve(true);
    } 

};