// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

//Solidity 0.5
contract GameToken is ERC20Burnable {

  string public name = "GameToken";
  string public symbol = "GT";
  uint public decimals = 0;

  constructor(uint256 initialSupply) public {
    _mint(msg.sender, initialSupply);
  }
}