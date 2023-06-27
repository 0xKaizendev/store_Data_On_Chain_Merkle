import { MerkleTree } from "merkletreejs";
import { ethers } from "hardhat";
export const createTree = async (): Promise<MerkleTree> => {
  let allowList = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  ];
  const leaves = allowList.map((leaf) => ethers.keccak256(leaf));
  console.log("leaves",leaves)
  const tree = new MerkleTree(leaves, ethers.keccak256, { sortPairs: true });
  console.log(tree.getHexRoot(),'\n')
  console.log(tree.toString())
  return tree
};
createTree()