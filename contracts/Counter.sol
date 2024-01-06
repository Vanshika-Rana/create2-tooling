// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter{
    uint256 private _counter;

    event CounterIncreased(uint256 Count);

    function increaseCounter() external {
        _counter += 1;

    }
    function getCounter() external view returns (uint256){
        return _counter;
    }

}