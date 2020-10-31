import { contract, addressContract } from './contract';
export async function getProduct() {
    return await contract.methods.MapProduct(2).call()
}