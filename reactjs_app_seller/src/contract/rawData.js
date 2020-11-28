import web3 from './web3';
import { contract, addressContract } from './contract';
var Tx = require("ethereumjs-tx");
const privateKey = Buffer.from('7c622d3d71aef6302f5458b079549fa408e471fab6594c578439c942538596f5', 'hex', );
const addressFrom = web3.eth.accounts.privateKeyToAccount("7c622d3d71aef6302f5458b079549fa408e471fab6594c578439c942538596f5").address;

export async function DBProduct_insert(title, price, unit, caterory, discount, soldAtLocation, hashIpfsDetail, hashIpfsImage) {
    var data = await contract.methods.DBProduct_insert(title, price, unit, caterory, discount, soldAtLocation, hashIpfsDetail, hashIpfsImage).encodeABI();
    rawTransaction(data);
}

export async function DBUser_update(nameUser, addressUser, phoneNumber, hashIpfsDetail) {
    var data = await contract.methods.DBUser_update(nameUser, addressUser, phoneNumber, hashIpfsDetail).encodeABI();
    rawTransaction(data);
}
// export function setProductDiscount(idProduct, discount) {
//     var data = contract.methods.setProductDiscount(idProduct, discount).encodeABI();
//     rawTransaction(data);
// }

// export function addImageProduct(idProduct, imageProduct) {
//     var data = contract.methods.addImageProduct(idProduct, imageProduct).encodeABI();
//     rawTransaction(data);
// }

// export function setCommentProduct(idProduct, idComment, content, startVote, dateTime) {
//     var data = contract.methods.setCommentProduct(idProduct, idComment, content, startVote, dateTime).encodeABI();
//     rawTransaction(data);
// }


// export function getAllProduct() {
//     var data = contract.methods.getAllProduct().encodeABI();
//     rawTransaction(data);
// }

// export function delIteamProduct(idProduct) {
//     var data = contract.methods.delIteamProduct(idProduct).encodeABI();
//     rawTransaction(data);
// }

// export function setUserIsSeller(addressUser, isSeller) {
//     var data = contract.methods.setUserIsSeller(addressUser, isSeller).encodeABI();
//     rawTransaction(data);
// }

export function rawTransaction(data) {
    web3.eth.getTransactionCount(addressFrom, (err, txCount) => {
        // console.log("Code:" + String(data));
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
            if (err) {
                console.log('err:', err);
            } else {
                console.log('txHash:', txHash);
            }
        })
    });

}