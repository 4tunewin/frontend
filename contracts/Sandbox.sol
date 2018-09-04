pragma solidity ^0.4.23;

contract Sandbox {
    mapping (uint => uint) bets;

    function getPackedData(uint val1, uint val2) public pure returns (bytes result) {
        result = abi.encodePacked(val1, val2);
    }
    
    function getHash(uint val1, uint val2) public pure returns (bytes32 result) {
        result = keccak256(getPackedData(val1, val2));
    }

    function verify(uint8 val1, uint val2, uint8 v, bytes32 r, bytes32 s) public pure returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 hash = getHash(val1, val2);
        bytes32 prefixHash = keccak256(abi.encodePacked(prefix, hash));

        return ecrecover(prefixHash, v, r, s);
    }

    function setBet(uint commit) public {
        bets[commit] = 1;
    }

    function getBet(uint commit) public view returns (uint) {
        uint hash = uint(keccak256(abi.encodePacked(commit)));
        return bets[hash];
    }
}