const hre = require("hardhat");

async function main() {
  const Report = await hre.ethers.getContractFactory("Report"); //fetching bytecode and ABI
  const Reports = await Report.deploy(); //creating an instance of our smart contract

  await Reports.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${Reports.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
