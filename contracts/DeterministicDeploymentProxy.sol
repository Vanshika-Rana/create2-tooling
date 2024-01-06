// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract DeterministicDeploymentProxy {
    address public factory;
    constructor(address _factory){
        factory = _factory;
    }
}