require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name release rural million give another army gasp'; 
let testAccounts = [
"0x56aaf400647550859ddbd44b27d6483797bf7233e3f77afafd5b4334ff8e8698",
"0x9a0b649adc23db9908623591cdc7931c1ae3497c5fb78368e275cc83339d6706",
"0x0489e85f0804e007151cfd54e281658e6277ef3163b495f36a057b0ded646294",
"0xa293c5aff6bad6d5f1c4d01d2f0f12aad506f38abe946cc8973e37ccd5c48c02",
"0x8abc398cfc7f91c10ada526741e08c7b28ed737698839338d5ca2fe9b3eacfa5",
"0x9b961c13fbfa9731f7c17ef4c75b3907c9b9f9acf0c572eddde4872273111e98",
"0x82afd74a0489673ec573c1665e31f617e2d4992f7acfff03d54fe590c09271ca",
"0xe6135f3640ec7afa79a204728ee55fb6375560c5a5b90814da5d4226eff5f7c1",
"0x859380b1439ec7fb1b96f1f91aa27d549c0b4e8496d9f38cdd0e934e25855226",
"0x4849c51adfb27f258ee4cf5abebb6e07665b75dab90b070433b1bc15adfe1736"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

