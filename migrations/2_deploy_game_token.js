const GameToken = artifacts.require("./GameToken.sol");

module.exports = function(deployer) {
  const initialSupply = 10000;
  deployer.deploy(GameToken, initialSupply);
};