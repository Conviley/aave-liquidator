const LP_ABI = require('../abi/LendingPool.json')
const { network, web3wss, web3 } = require('./web3.js')
const {
  liquidatorAddress,
  addressToLiquidate,
  collateralAddress,
  repayTokenAddress,
  lpAddress,
  liquidationAmount,
  gasPrice,
  gasLimit,
  receiveATokens,
} = require('../config.json')[network]

const HEALTH_CONSTANT = 1000000000000000000
const MAX_UINT256 =
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

const lpContract = new web3.eth.Contract(LP_ABI, lpAddress)

function setLiquidationAmount() {
  return liquidationAmount == 0 ? MAX_UINT256 : liquidationAmount
}

const liquidationAmountBN = web3.utils.toBN(setLiquidationAmount())

async function main() {
  network == 'mainnet'
    ? console.log('Running on Mainnet!')
    : console.log('Running on Ropsten testnet!')

  var subscription = web3wss.eth
    .subscribe('newBlockHeaders', async (e, result) => {
      if (!e) {
        console.log('New block added: ' + result.number)
        console.log('Fetching health factor for user: ' + addressToLiquidate)
        receipt = await lpContract.methods
          .getUserAccountData(addressToLiquidate)
          .call()
        console.log(
          'Health Factor: ' + receipt.healthFactor / 1000000000000000000
        )
        if (
          receipt.healthFactor - HEALTH_CONSTANT < 0 &&
          receipt.healthFactor != 0
        ) {
          subscription.unsubscribe(function (e, success) {
            if (success) {
              console.log('Terminated websocket subscription connection!')
            }
          })

          await liquidate()
          process.exit()
        } else {
          console.log(
            'Health factor to high or 0! Nothing to liquidate!' + '\n'
          )
          console.log('Waiting for new block...')
        }
        return
      }

      console.error(e)
    })
    .on('connected', function (subscriptionId) {
      console.log('Web3 websocket subscription connection established!\n')
      console.log('Waiting for new block...')
    })
    .on('error', console.error)
}

async function liquidate() {
  console.log('\nIssuing liquidation call...')
  liquidationReceipt = await lpContract.methods
    .liquidationCall(
      collateralAddress,
      repayTokenAddress,
      addressToLiquidate,
      liquidationAmountBN,
      receiveATokens
    )
    .send({
      from: liquidatorAddress,
      gasPrice: gasPrice,
      gas: gasLimit,
    })
    .catch((e) => {
      console.log('Liquidation FAIL')
      console.log(e.message)
      process.exit()
    })
  console.log(
    'Sucessfully liquidated! \nTxHash: ' + liquidationReceipt.transactionHash
  )
}

main()
