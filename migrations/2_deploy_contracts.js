const Router = artifacts.require("PancakeRouter01.sol");
const WETH = artifacts.require("WETH.sol")

module.exports = async function (deployer) {
    let weth;
    const FACTORY_ADDRESS = '0x1e17A2355caea4499b1936E4C60069435905B6dF';         // factory address here


    // FOR TESTNET DEPLOYMENT
    // weth = await WETH.at('')            // use WBNB instead


    // FOR LOCAL BLOCKCHAIN DEPLOYMENT
    await deployer.deploy(WETH);
    weth = await WETH.deployed();


    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
