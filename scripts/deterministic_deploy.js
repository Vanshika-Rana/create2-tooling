async function main() {
	const [deployer] = await ethers.getSigners();
	console.log(
		"Deploying Deterministic Deployment Proxy with deployer address:",
		deployer.address
	);
	const deterministicContractFactory = await ethers.getContractFactory(
		"DeterministicDeploymentProxy"
	);
	const deterministicContract = await deterministicContractFactory.deploy();
	await deterministicContract.waitForDeployment();
	console.log(
		"Deterministic Deployment Proxy deployed to address:",
		deterministicContract.target
	);
}
main()
	.then(() => process.exit(0))
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});
