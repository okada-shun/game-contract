// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

//Solidity 0.5
contract GameToken is ERC20Burnable, ERC20Mintable {

  string private _name;
  string private _symbol;
  uint8 private _decimals;

  constructor(uint256 initialSupply, string memory name, string memory symbol, uint8 decimals) public {
    _mint(msg.sender, initialSupply);
    _name = name;
    _symbol = symbol;
    _decimals = decimals;
  }

  function name() public view returns (string memory) {
    return _name;
  }

  function symbol() public view returns (string memory) {
    return _symbol;
  }

  function decimals() public view returns (uint8) {
    return _decimals;
  }

}