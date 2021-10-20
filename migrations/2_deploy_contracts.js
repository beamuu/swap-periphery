const Router = artifacts.require("PancakeRouter01.sol");
const WBNB = artifacts.require("WBNB.sol")

module.exports = async function (deployer) {
    let weth;
    const FACTORY_ADDRESS = '0x9f45793D732FCa933B57221FF1aCb559CacE96f5';         // factory address here


    // FOR TESTNET DEPLOYMENT
    weth = await WETH.at('0x094616f0bdfb0b526bd735bf66eca0ad254ca81f')            // use WBNB instead


    // FOR LOCAL BLOCKCHAIN DEPLOYMENT
    await deployer.deploy(WBNB);
    const wbnb = await WBNB.deployed();


    await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
};
