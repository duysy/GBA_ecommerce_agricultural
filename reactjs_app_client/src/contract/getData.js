import { contract, addressContract } from './contract';
export async function getProduct(idProduct) {
    return await contract.methods.MapProduct(idProduct).call()
}
export async function getImageProduct(idProduct) {
    return await contract.methods.getImageProduct(idProduct).call()
}
export async function getCommentProduct(idProduct, idComment) {
    return await contract.methods.getCommentProduct(idProduct, idComment).call()
}
export async function getUserInfo(addressUser) {
    return await contract.methods.getUserInfo(addressUser).call()
}
export async function getAllUser() {
    return await contract.methods.getAllUser().call()
}
export async function getAllIdProduct() {
    return await contract.methods.getAllIdProduct().call()
}