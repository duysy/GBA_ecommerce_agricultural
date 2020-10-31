import web3 from './web3';

const addressContract = '0x4b32d5c9dcb4ed8fef1a4368b38a68d13ab7a607';
const abi = [{
        "inputs": [{
                "internalType": "uint256",
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "idComment",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "content",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "startVote",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dateTime",
                "type": "string"
            }
        ],
        "name": "setCommentProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "imageProduct",
                "type": "string"
            }
        ],
        "name": "setImageProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "unit",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "category",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "datePost",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashIpfsDetail",
                "type": "string"
            }
        ],
        "name": "setProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "idSeller",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "AvengeStart",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "nameSeller",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "addressSeller",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashIpfsDetail",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isConfirm",
                "type": "bool"
            }
        ],
        "name": "setSeller",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "ArrayIdProduct",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "idComment",
                "type": "uint256"
            }
        ],
        "name": "getCommentProduct",
        "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "idProduct",
            "type": "uint256"
        }],
        "name": "getImageProduct",
        "outputs": [{
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "MapProduct",
        "outputs": [{
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "unit",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "category",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "datePost",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashIpfsDetail",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "MapSellert",
        "outputs": [{
                "internalType": "uint256",
                "name": "AvengeStart",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "nameSeller",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "addressSeller",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashIpfsDetail",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isConfirm",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]
const contract = new web3.eth.Contract(abi, addressContract);
export { addressContract, contract };