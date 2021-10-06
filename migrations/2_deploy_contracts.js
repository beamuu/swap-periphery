const Router = artifacts.require("PancakeRouter01.sol");
const WETH = artifacts.require("WETH.sol")

module.exports = async function (deployer) {
    let weth;
    const FACTORY_ADDRESS = '0x545aff39B979acD12703D30E3758D8269CF7493F'; // factory address here


    // FOR TESTNET DEPLOYMENT
    weth = await WETH.at('0x094616f0bdfb0b526bd735bf66eca0ad254ca81f')            // use WBNB instead


    // FOR LOCAL BLOCKCHAIN DEPLOYMENT
    // await deployer.deploy(WETH);
    // weth = await WETH.deployed();


    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
