var Dice = artifacts.require('./Dice.sol');
var Sandbox = artifacts.require('./Sandbox.sol');

module.exports = function(deployer) {
    deployer.deploy(Dice);
    deployer.deploy(Sandbox);
};
