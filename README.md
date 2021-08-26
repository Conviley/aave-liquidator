# ⚠️THE AAVE LIQUIDATOR IS NO LONGER BEING MAINTAINED⚠️
Development and maintenance of the aave liquidator has stopped as of September 2020!  
The repository is left public for demo / educational purposes only!

# AAVE Liquidator
This script allows monitoring of a single address that has an outstanding loan on AAVE. Once that address has a health factor below 1 a liquidation call will be issued!

THIS SCRIPT MAY CONTAIN FAULTS! USE AT YOUR OWN RISK! 

# Installation Guide
## Prerequisites
1. Download and install node from the [Official site](https://nodejs.org/en/download/)
2. Create an account on [Infura](https://infura.io/) and set up a new project
3. Obtain [Eth gas station api key](https://docs.ethgasstation.info/)

## Setup
1. Clone the repo
2. Run `npm install` to install all dependencies
3. In the root of the project create a file called `config.json` and copy the content below into it.  
Make sure `config.json` has EXACTLY the same structure but with YOUR data as shown below
```json
{
  "mainnet": {
    "liquidatorAddress": "Address FROM which you will liquidate",
    "addressToLiquidate": "The address you wish TO liquidate",
    "collateralAddress": "Address of the collateral you wish to recieve",
    "repayTokenAddress": "Address of the token you liquidate with",
    "lpAddressProviderAddress": "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
    "lpAddress": "0x398eC7346DcD622eDc5ae82352F02bE94C62d119",
    "latestLpCoreAddress": "0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3",
    "wss": "wss://mainnet.infura.io/ws/v3/YOUR_PRJECT_ID",
    "http": "https://mainnet.infura.io/v3/YOUR_PRJECT_ID",
    "mnemonic": "Seed phrase to your wallet",
    "ethGasStationAPIKey": "Your ETH GAS STATION API KEY",
    "dynamicGasPrice": "set to <true> or <false> depending on whether you want to set your own gas price or use eth gas station",
    "liquidationAmount": "Amount you wish to liquidate in WEI. Enter <"0"> and it will liquidate as much as possible",
    "gasPrice": "Gas price in WEI. I recommend you set this to (AT LEAST) the fastest as suggested by https://ethgasstation.info/",
    "gasLimit": 1000000,
    "receiveATokens": "Set to <true> or <false> depending on whether you want to receive you collateral as aTokens or not"
  },
  "ropsten": {
    "liquidatorAddress": "Address FROM which you will liquidate",
    "addressToLiquidate": "The address you wish TO liquidate",
    "collateralAddress": "Address of the collateral you wish to recieve",
    "repayTokenAddress": "Address of the token you liquidate with",
    "lpAddressProviderAddress": "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728",
    "lpAddress": "0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa",
    "latestLpCoreAddress": "0x4295Ee704716950A4dE7438086d6f0FBC0BA9472",
    "wss": "wss://ropsten.infura.io/ws/v3/YOUR_PRJECT_ID",
    "http": "https://ropsten.infura.io/v3/YOUR_PRJECT_ID",
    "mnemonic": "Seed phrase to your wallet",
    "ethGasStationAPIKey": "Your ETH GAS STATION API KEY",
    "dynamicGasPrice": "set to <true> or <false> depending on whether you want to set your own gas price or use eth gas station",
    "liquidationAmount": "Amount you wish to liquidate in WEI. Enter <"0"> and it will liquidate as much as possible",
    "gasPrice": "Gas price in WEI. I recommend you set this to (AT LEAST) the fastest as suggested by https://ethgasstation.info/",
    "gasLimit": 1000000,
    "receiveATokens": "Set to <true> or <false> depending on whether you want to receive you collateral as aTokens or no"
  }
}

```
The `ropsten` part of the json object is only necessary if you wish to play around on the ropsten network before you run this on mainnet.  
You can find AAVES's testnet solution [here!](https://testnet.aave.com/)  
You can find the addresses of the different AAVE contracts and tokens for mainnet and ropsten [here!](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances)  

# Running instructions
## Approve
If you have not allowed AAVE's `LendingPoolCore` contract to spend the token type as you specified in the `repayTokenAddress` field in the `config.json` file, you will not be able to perform a liquidation and your transaction will fail! I have included a script that you can use to allow the contract to spend your specified `repayToken`! The script will perform a "inifity unlock" So you only need to run this once per token type. urthermore it will update 'config.json' file if the address to the `LendingPoolCore` contract has changed. If the address has changed you will have to re run this for every repay token type. 
### To run the script on mainnet
- Enter `npm run approve mainnet`

### To run the script on mainnet
- Enter `npm run approve`

## Run The Liquidator
Now that you have set up the `config.json` file and approved AAVE's `LendingPoolCore` contract to spend your funds you can start the liquidator.  
Simply run the following command to start 
#### For mainnet
- Enter `npm start mainnet`

#### For Ropsten
- Enter `npm start`

The liquidator is now live and awaiting the address you're monitoring to reach a health factor below 1!
