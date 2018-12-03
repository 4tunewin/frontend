import { Component } from 'react';
import Web3 from 'web3';

class Web3Provider extends Component {
    // Fetch all required data and start polling
    async componentDidMount() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                // Require account access if needed
                await window.ethereum.enable();
            } catch (error) {
                // User denined account access
                console.log(error);
            }
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.web3 = new Web3();
        }

        console.log(window.web3);
    }

    render() {
        return this.props.children;
    }
}

export default Web3Provider;
