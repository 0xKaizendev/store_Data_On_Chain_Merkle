# Merkle Tree Verification Project

This project provides a Solidity smart contract and Typescript utilities for Merkle tree verification. The Solidity contract, `Merkle.sol`, allows users to verify Merkle tree proofs by providing the proof and the expected root hash. The Typescript utilities, `merkle_tree.ts`, enable the creation of Merkle trees and generation of proofs using the `merkletreejs` library and Ethereum-compatible cryptographic functions from `ethers` and `hardhat`.

## Notification: Update Allow List

Please note that the `allowList` in the `merkle_tree.js` file needs to be updated. The `allowList` represents the leaves of the Merkle tree and should include the addresses that need to be verified calling the `verify`.

To update the `allowList`, open the `merkle_tree.js` file and modify the `allowList` array with the first address from the command `hardhat node`. Save the file and proceed with the project setup and execution.

Please ensure that the `allowList` is up-to-date before using the Merkle tree verification functionality.


The project includes tests written in Typescript to ensure the correctness of the Merkle tree verification process. The tests cover verifying valid proofs and can be executed using popular testing frameworks like Mocha and Chai.

Feel free to explore the code and documentation for more details on how to use and integrate this Merkle tree verification functionality into your projects.


```shell
run npx hardhat test 
```
