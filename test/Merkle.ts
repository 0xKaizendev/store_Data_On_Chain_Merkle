import { createTree } from "../scripts/merkle_tree";
import { expect } from "chai";
import { ethers } from "hardhat";
describe("Merkle", function () {
  it("Should verify a valid proof", async () => {
    const tree = await createTree();
    const root = tree.getHexRoot();
    const [addr] = await ethers.getSigners();
    // const addresses = await ethers.getSigners();
    // console.log("addresse", addr.address);
    const hashedAddrr = ethers.keccak256(addr.address);
    // console.log("Hash", hashedAddrr);
    console.log("Looking for ", addr.address, " => ", hashedAddrr);
    const proof = tree.getHexProof(hashedAddrr);
    const Merkle = await ethers.getContractFactory("Merkle");
    const contract = await Merkle.deploy();
    const verification = await contract.verify(proof, root);
    expect(await contract.verify(proof, root)).to.equal(true);
  });
});
