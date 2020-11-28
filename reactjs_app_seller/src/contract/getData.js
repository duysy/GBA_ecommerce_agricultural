import { contract, addressContract } from './contract';
import web3 from './web3';
const addressFrom = web3.eth.accounts.privateKeyToAccount("7c622d3d71aef6302f5458b079549fa408e471fab6594c578439c942538596f5").address;

export async function getIdNodeto5(start) {
    return await contract.methods.getIdNodeto5(start).call()
}

export async function getAddressUint256() {
    return await contract.methods.getAddressUint256(addressFrom).call()
}
export async function getInforAccount(addressUnit256) {
    return await contract.methods.MapUser(addressUnit256).call()
}
export async function DBUser_getListProduct(addressUnit256) {
    return await contract.methods.DBUser_getListProduct(addressUnit256).call()
}
export async function getInforProduct(id) {
    return await contract.methods.MapProduct(id).call()
}
export async function DBProduct_getImageProduct(id) {
    return await contract.methods.DBProduct_getImageProduct(id).call()
}
export async function owner() {
    return await contract.methods.owner().call()
}
export async function random() {
    return await contract.methods.random().call()
}
// export async function getImageProduct(idProduct) {
//     return await contract.methods.getImageProduct(idProduct).call()
// }
// export async function getCommentProduct(idProduct, idComment) {
//     return await contract.methods.getCommentProduct(idProduct, idComment).call()
// }
// export async function getUserInfo(addressUser) {
//     return await contract.methods.getUserInfo(addressUser).call()
// }
// export async function getAllUser() {
//     return await contract.methods.getAllUser().call()
// }
// export async function getAllIdProduct() {
//     return await contract.methods.getAllIdProduct().call()
// }