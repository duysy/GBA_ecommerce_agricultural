import Web3 from 'web3';

const infura = "https://rinkeby.infura.io/v3/1c513784acdd44ce985ea2ca3a56145a";
const web3 = new Web3(new Web3.providers.HttpProvider(infura))

export default web3;