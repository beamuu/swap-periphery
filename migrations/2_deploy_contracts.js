const Router = artifacts.require("PancakeRouter01.sol");
const WETH = artifacts.require("WETH.sol")

module.exports = async function (deployer) {
    let weth;
    const FACTORY_ADDRESS = '0xa03FfEA0C179EA31b461Aa8f6c2E0aC2d712E381';         // factory address here


    // FOR TESTNET DEPLOYMENT
    // weth = await WETH.at('')            // use WBNB instead


    // FOR LOCAL BLOCKCHAIN DEPLOYMENT
    await deployer.deploy(WETH);
    weth = await WETH.deployed();


    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
