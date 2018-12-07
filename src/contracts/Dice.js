import TruffleContract from 'truffle-contract';
import Web3 from 'web3';
import Dice from './Dice.json';

import config from '../config';

// const web3 = new Web3(new Web3.providers.HttpProvider(config.network.uri));
const provider = new Web3.providers.HttpProvider(config.network.uri);

console.log({ config: config.network.uri, provider });

const DiceContract = TruffleContract(Dice);
DiceContract.setProvider(provider);

// if (window.web3) {
// }

export default DiceContract;
