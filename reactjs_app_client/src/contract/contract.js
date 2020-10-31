import web3 from './web3';

const addressContract = '0x37617BcaD95a712344F7D7746E75C6123332caFF';
const abi = [{
        "inputs": [{
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "delIteamProduct",
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
                "internalType": "uint256",
                "name": "discount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "soldAtLocation",
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
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "discount",
                "type": "uint256"
            }
        ],
        "name": "setProductDiscount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "nameUser",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "addressUser",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashIpfsDetail",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "phoneNumber",
                "type": "string"
            }
        ],
        "name": "setUserInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "addressUser",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isSeller",
                "type": "bool"
            }
        ],
        "name": "setUserIsSeller",
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
        "inputs": [],
        "name": "getIAllIdProduct",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
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
            "internalType": "address",
            "name": "addressUser",
            "type": "address"
        }],
        "name": "getUserInfo",
        "outputs": [{
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
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
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
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
                "internalType": "uint256",
                "name": "discount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "soldAtLocation",
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