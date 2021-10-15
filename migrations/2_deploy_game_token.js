const GameToken = artifacts.require("./GameToken.sol");
const fs = require('fs')

module.exports = function(deployer) {
  const initialSupply = 10000;
  deployer.deploy(GameToken, initialSupply).then(instance => {
    try {
      fs.writeFileSync('../game-api/GameToken_address.txt', instance.address);
      fs.writeFileSync('../game-api/GameToken.abi', JSON.stringify(instance.abi));
    } catch (err) {
      console.log(err);
    }
  });
};