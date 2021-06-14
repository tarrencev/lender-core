// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;

contract Ownable {
    address public _owner;
    address public _pendingOwner;

    constructor(address owner_) {
        _owner = owner_;
    }

    /**
     * @notice Owner address is not updated until the new owner
     * address has called `acceptOwner()` to accept this responsibility.
     */
    function setOwner(address owner_) public onlyOwner {
        _pendingOwner = owner_;
    }

    /**
     * @notice `setOwner()` should be called by the existing owner
     * address prior to calling this function.
     */
    function acceptOwner() external {
        require(msg.sender == _pendingOwner, "pendingOwner");
        _owner = msg.sender;
    }

    function owner() public view returns (address) {
        return _owner;
    }

    modifier onlyOwner {
        require(msg.sender == _owner, "owner");
        _;
    }
}
