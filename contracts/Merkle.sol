pragma solidity 0.8.19;
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
contract Merkle{
function verify(bytes32[] memory _proof,bytes32 root) public view returns(bool) {
            //  require(MerkleProof.verify(root, keccak256(abi.encodePacked(msg.sender))), "Caller is not a claimer");
            require(MerkleProof.verify(_proof, root,keccak256(abi.encodePacked(msg.sender))),"Caller is not a claimer");
    return true;
}
}