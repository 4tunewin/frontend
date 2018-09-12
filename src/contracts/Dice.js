import TruffleContract from 'truffle-contract';
import Dice from './Dice.json';

const DiceContract = TruffleContract(Dice);
if (window.web3) {
    DiceContract.setProvider(window.web3.currentProvider);
}

export default DiceContract;
