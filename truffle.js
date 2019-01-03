// Allows us to use ES6 in our migrations and tests.
require('babel-register')
require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider');

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.INFURA_URL)
      },
      network_id: 4,
    }
  },

  compilers: {
    solc: {
      version: '0.4.24'
    }
  }
}
