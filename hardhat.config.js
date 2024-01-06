require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { utils } = require("ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.19",

	networks: {
		polygon: {
			url: "https://rpc-mainnet.maticvigil.com",
			accounts: [process.env.PRIVATE_KEY], // Use the private key from the .env file
			chainId: 137, // Polygon (Matic) chain ID
		},
		optimism: {
			url: "https://mainnet.optimism.io/", // Update with the Optimism RPC endpoint
			accounts: [process.env.PRIVATE_KEY],
			chainId: 10, // Polygon (Matic) chain ID
			gasPrice: 0, // Set gasPrice to 0 for Optimism
			gas: "auto",
			ovm: true, // Enable OVM (Optimistic Virtual Machine)
		},
	},

	deterministicDeployment: (network) => {
		if (network === "optimism") {
			return {
				factory: "<optimism_factory_address>", // Update with actual factory address
				deployer: "0x07383C60b1124cE1758D3C721002eAE0C2b3C2F2",
				funding: utils.parseUnits("0.01", "ether").toString(), // 1 MATIC in wei
			};
		}

		// For other networks, use the default Deterministic Deployment Proxy
		return {
			factory: "<default_factory_address>", // Update with actual factory address
			deployer: "<default_deployer_address>",
			funding: utils.parseUnits("1", "ether").toString(), // 1 ETH in wei
			signedTx: "<default_raw_signed_tx>",
		};
	},
};
