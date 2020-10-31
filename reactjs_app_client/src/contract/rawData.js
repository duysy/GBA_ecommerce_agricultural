import web3 from './web3';
import { contract, addressContract } from './contract';
var Tx = require("ethereumjs-tx");
const privateKey = Buffer.from('7c622d3d71aef6302f5458b079549fa408e471fab6594c578439c942538596f5', 'hex', );
const addressFrom = web3.eth.accounts.privateKeyToAccount("7c622d3d71aef6302f5458b079549fa408e471fab6594c578439c942538596f5").address;

function setProduct(id, title, price, unit, caterory, datePost, hashIpfsDetail) {
    web3.eth.getTransactionCount(addressFrom, (err, txCount) => {
        var data = contract.methods.setProduct(id, title, price, unit, caterory, datePost, hashIpfsDetail).encodeABI();
        console.log("Code:" + String(data));
        rawTransaction(txCount, data);
    })
}


function rawTransaction(txCount, data) {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.numberToHex(40000 + String(data).length * 4000), // Raise the gas limit to a much higher amount
        gasPrice: web3.utils.numberToHex(10 ** 9),
        to: addressContract,
        data: data,
        chainId: 0
    }
    const tx = new Tx(txObject)
    tx.sign(privateKey)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('err:', err, 'txHash:', txHash);
        return txHash;
    })

}

export { setProduct }