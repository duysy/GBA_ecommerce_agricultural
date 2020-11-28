import web3 from './web3';

const addressContract = '0x3FD3459cE0a929ca0925Ef50FD25dec1921499E1';
const abi = [{
        "inputs": [{
                "internalType": "uint256",
                "name": "idOrder",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberProduct",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "note",
                "type": "string"
            }
        ],
        "name": "DBOder_insert",
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
        "name": "DBProduct_addImageProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
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
            },
            {
                "internalType": "string",
                "name": "hashIpfsImage",
                "type": "string"
            }
        ],
        "name": "DBProduct_insert",
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
        "name": "DBProduct_setCommentProduct",
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
        "name": "DBProduct_setProductDiscount",
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
        "name": "DBProduct_update",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DBUser_active",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "address_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "idProduct",
                "type": "uint256"
            }
        ],
        "name": "DBUser_insertListProduct",
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
                "name": "phoneNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "hashIpfsDetail",
                "type": "string"
            }
        ],
        "name": "DBUser_update",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "address_",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isSeller",
                "type": "bool"
            }
        ],
        "name": "DBUser_updateUserIsSeller",
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
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "idComment",
                "type": "uint256"
            }
        ],
        "name": "DBProduct_getCommentProduct",
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
        "name": "DBProduct_getImageProduct",
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
            "name": "address_",
            "type": "uint256"
        }],
        "name": "DBUser_getListProduct",
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
            "internalType": "address",
            "name": "address_",
            "type": "address"
        }],
        "name": "DBUser_sellect",
        "outputs": [{
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
            "internalType": "address",
            "name": "address_",
            "type": "address"
        }],
        "name": "getAddressUint256",
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
            "name": "start",
            "type": "uint256"
        }],
        "name": "getIdNodeto5",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
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
        "name": "MapOrder",
        "outputs": [{
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "idProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dateTime",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "numberProduct",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalValue",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "note",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "state",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "ispay",
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
                "internalType": "uint256",
                "name": "datePost",
                "type": "uint256"
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
            },
            {
                "internalType": "address",
                "name": "seller",
                "type": "address"
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
        "name": "MapUser",
        "outputs": [{
                "internalType": "uint256",
                "name": "AvengeStart",
                "type": "uint256"
            },
            {
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
            },
            {
                "internalType": "bool",
                "name": "isSeller",
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
    },
    {
        "inputs": [],
        "name": "random",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]
const contract = new web3.eth.Contract(abi, addressContract);
export { addressContract, contract };