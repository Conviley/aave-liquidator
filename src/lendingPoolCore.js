import LP_ABI from '../abi/LendingPool.json'
import { web3, network } from './web3.js'
import config from '../config.json'

const lpContract = new web3.eth.Contract(LP_ABI, config[network].lpAddress)

export default lpContract
