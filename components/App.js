import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import image from '../assets/mountain2.jpg'

/*
class App extends Component {
    state = { walletInfo: {} };

    componentDidMount() {
        fetch(`${document.location.origin}/api/wallet-info`)
            .then(response => response.json())
            .then(json => this.setState({ walletInfo: json }));
    }

    render() {
        const { address, balance } = this.state.walletInfo;

        return(
            <div className="App">
                <NavBar />
                <br />
                <div className="lilas">
                    Welcome to ESEChain...
                </div>
                <br />
                <br />
                <div className="WalletInfo">
                    <div>Address: {address}</div>
                    <div>Balance: {balance}</div>
                </div>
            </div>
        );
    }
}
*/

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: image
    },
}));

export default function App() {
    const classes = useStyles();
    return <div className={classes.root}>Hi</div>;
};