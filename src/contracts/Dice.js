import TruffleContract from 'truffle-contract';
import Dice from './Dice.json';

const DiceContract = TruffleContract(Dice);

export default DiceContract;
