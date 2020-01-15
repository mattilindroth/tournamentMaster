import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Tournament } from '../Models/Tournament';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DateFormat from 'dateformat';

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
        console.log("this.state.tournaments", this.state.tournaments);
        this.loadTournaments();
        console.log("this.state.tournaments", this.state.tournaments);
    };

    public render() {
        let tournamentsData = this.state.tournaments ;
        let tournaments: JSX.Element[] | undefined = undefined;
        if(tournamentsData !== undefined) {
            tournaments = tournamentsData.map((x) => 
            <TableRow key={x.id}>
                <TableCell>
                    {x.name}
                </TableCell>
                <TableCell>
                    { DateFormat(new Date(x.start),"yyyy-MM-dd HH:mm:ss" )}
                </TableCell>
                <TableCell>
                    {(new Date(x.end)).toISOString()}
                </TableCell>
                <TableCell>
                    {x.location}
                </TableCell>
            </TableRow>);
        }

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table color="primary">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Start</TableCell>
                                <TableCell>End</TableCell>
                                <TableCell>Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tournaments}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" color="primary">Tournament</Button> 
            </div>);
    }

    public loadTournaments = () => {
        axiosInstance.get('tournament/')
        .then(res => {
            console.log(res);
            let tournamentData: Tournament[] = res.data;
            console.log('tournamentData',tournamentData);
            this.setState({tournaments: tournamentData});
        })
        .catch(res => {
            return null;
        });
        //return Promise.resolve(true);
    } 

};

export default TournamentsList;