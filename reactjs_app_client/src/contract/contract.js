import web3 from './web3';

const addressContract = '0xFBCDdCde8F78Bc1928c0a8f09976474675679732';
const abi = [{
        "constant": false,
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
        "name": "addImageProduct",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "delIteamProduct",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
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
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
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
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
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
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
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
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
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
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllIdProduct",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
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
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
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
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
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
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
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
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
const contract = new web3.eth.Contract(abi, addressContract);
export { addressContract, contract };