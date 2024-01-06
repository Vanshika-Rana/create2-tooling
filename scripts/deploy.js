// scripts/deploy_counter.js
const { utils } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log(
		"Deploying Counter contract with deployer address:",
		deployer.address
	);

	const Counter = await ethers.getContractFactory("Counter");
	const deterministicProxyAddress =
		"0x83F50f8947b739225BDE110f16F66688A76F3230"; // Replace with the actual address
	const counter = await Counter.deploy({
		deterministicDeployment: { factory: deterministicProxyAddress },
	});

	await counter.waitForDeployment();

	console.log("Counter deployed to address:", counter.target);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
