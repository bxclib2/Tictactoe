const TicTacToe = artifacts.require("TicTacToe");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(TicTacToe,  { from:accounts[0], value: web3.utils.toWei("0.1","ether")});
};
