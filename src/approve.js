const fs = require('fs-extra')

const ERC20_ABI = require('../abi/ERC20ABI.json')
const LP_ADDRESS_SPROVIDER_ABI = require('../abi/LendingPoolAddressesProvider.json')

const { network, web3 } = require('./web3')
const {
  repayTokenAddress,
  liquidationAmount,
  liquidatorAddress,
  lpAddressProviderAddress,
  latestLpCoreAddress,
  gasPrice,
} = require('../config.json')[network]

const REPAY_TOKEN_CONTRACT = new web3.eth.Contract(ERC20_ABI, repayTokenAddress)
const LP_ADDRESS_PROVIDER_CONTRACT = new web3.eth.Contract(
  LP_ADDRESS_SPROVIDER_ABI,
  lpAddressProviderAddress
)
const MAX_UINT256 =
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
const CONFIG_FILE_PATH = './config.json'

function setLiquidationAmount() {
  return liquidationAmount == 0 ? MAX_UINT256 : liquidationAmount
}
const liquidationAmountBN = web3.utils.toBN(setLiquidationAmount())

async function approve(collateralAmountEth = 0) {
  network == 'mainnet'
    ? console.log('Running on Mainnet!')
    : console.log('Running on Ropsten testnet!')
  console.log('\n' + 'Fetching the latest LendingPoolCore contract address')
  const lpCoreAddress = await fetchLatestLpCoreAddress()
  const allowance = await fetchAllowance(lpCoreAddress)

  // This is not an ideal comparison because allowance and collateralAmountEth probably aren't the same currency
  if (allowance.cmp(web3.utils.toBN(collateralAmountEth)) < 0) {
    console.log('Increasing LendingPoolCore contract allowance')

    await REPAY_TOKEN_CONTRACT.methods
      .approve(lpCoreAddress, web3.utils.toBN(MAX_UINT256).toString())
      .send({ from: liquidatorAddress, gasPrice: gasPrice })
      .catch((e) => {
        throw Error(`Error approving RepayToken allowance: ${e.message}`)
      })
    console.log('LendingPoolCore contract Approved!\n')
  } else {
    console.log('LendingPoolCore contract already has sufficient allowance!\n')
  }
  if (require.main === module) {
    process.exit()
  }
}

async function fetchLatestLpCoreAddress() {
  const lpCoreAddress = await LP_ADDRESS_PROVIDER_CONTRACT.methods
    .getLendingPoolCore()
    .call()
    .catch((e) => {
      throw Error(`Error getting lendingPool address: ${e.message}`)
    })
  console.log('Latest address fetched: ' + lpCoreAddress)

  if (lpCoreAddress != latestLpCoreAddress) {
    console.log('LendingPoolCore contract address has changed!')
    outputFile = await fs.readJSON(CONFIG_FILE_PATH)
    outputFile[network].latestLpCoreAddress = lpCoreAddress
    await fs.writeJSON(CONFIG_FILE_PATH, outputFile)
    console.log('Updated ' + CONFIG_FILE_PATH + ' with the new address!')
  } else {
    console.log('LendingPoolCore contract address has not changed!')
  }
  return lpCoreAddress
}

async function fetchAllowance(lpCoreAddress) {
  return web3.utils.toBN(
    await REPAY_TOKEN_CONTRACT.methods
      .allowance(liquidatorAddress, lpCoreAddress)
      .call()
  )
}

if (require.main === module) {
  approve()
} else {
  module.exports = approve
}
