require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/K2-95rC6jBdk80yIsTTVxhX_vtVHoOWL",
      accounts: [
        "93a23e306ca1c497d54666b0fde696fe201d7226e7c32a5bdc2288ba6fec1b3f",
      ],
    },
  },
};
