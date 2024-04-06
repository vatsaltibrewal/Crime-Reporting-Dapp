const hre = require("hardhat");

async function main() {
  const Report = await ethers.deployContract("Report"); //fetching bytecode and ABI
  // const Reports = await Report.deploy(); //creating an instance of our smart contract

  // await Reports.deployed();//deploying your smart contract

  // console.log("Deployed contract address:",`${Reports.address}`);
  console.log("Token address:", await Report.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x847F1e87E9692993a3e2B8Dd22867f73e3818281