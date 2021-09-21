require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note meadow unusual install clip olympic slogan'; 
let testAccounts = [
"0x140d4b8f638b8c416fb51acd32b5bd7eb42f517bf409b2606996d32aa9eb2771",
"0xbcf85045cc4c5711e3de2113dfe6e9a9e2124baf4dba732940f70878ec1196a3",
"0x236ea90cb8dce9118d64c5cd2300c9e12fdf5d99adf9bc60bcde3ca6b613e462",
"0xcdfa895198cb953103cf69ba36d5357972f9ff7cec6b8e253413c6ee05787df8",
"0xf665be8a64396e27add5bd8112b844af98b695862a6ef2705c7a7a30f5d3a5a9",
"0xa8b4b7fa6d64add65623ee62ec5003d0add33d5c6076e13bd825db98c428ddf5",
"0x7355af0f8797018e411754e228b8defd093356ac0604b993cb03c016997551bf",
"0xa466ceb73c81261886d57d3fd1b3c7e21eaff717cc0c0404820d1fff10a1a678",
"0x5052eea7fae38dbbcf62a0fcd2126ca4b1b2f0a55b19bafb074a49fbd3f5606d",
"0x91712fb2aa0022f8f47571551daceea62a01ff3f4b4598a833e8ae3191d078db"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


