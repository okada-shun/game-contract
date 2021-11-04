const GameToken = artifacts.require("./GameToken.sol");
const fs = require('fs');

module.exports = function(deployer) {
  const initialSupply = 10000;
  const name = "GameToken";
  const symbol = "GT";
  const decimals = 4;
  deployer.deploy(GameToken, initialSupply, name, symbol, decimals).then(instance => {
    try {
      fs.writeFileSync('../game-api/GameToken_address.txt', instance.address);
      fs.writeFileSync('../game-api/GameToken.abi', JSON.stringify(instance.abi));
      fs.writeFileSync('../game-api-gin/gmtoken/GameToken_address.txt', instance.address);
      fs.writeFileSync('../game-api-gin/gmtoken/GameToken.abi', JSON.stringify(instance.abi));
    } catch (err) {
      console.log(err);
    }
  });
};