pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2; // contructer methot input string.

contract GBA {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    //------------------------Product-----------------------------
    mapping(uint256 => Product) public MapProduct;
    uint256[] public ArrayIdProduct;
    struct Product {
        string title;
        uint256 price;
        uint256 unit;
        string category;
        string datePost;
        string hashIpfsDetail;
        string[] imageProduct;
        mapping(uint256 => CommentProduct) commentProduct;
    }
    struct CommentProduct {
        address addressComment;
        string content;
        uint256 startVote;
        string dateTime;
    }

    function setProduct(
        uint256 id,
        string memory title,
        uint256 price,
        uint256 unit,
        string memory category,
        string memory datePost,
        string memory hashIpfsDetail
    ) public {
        ArrayIdProduct.push(id);
        MapProduct[id].title = title;
        MapProduct[id].price = price;
        MapProduct[id].unit = unit;
        MapProduct[id].category = category;
        MapProduct[id].datePost = datePost;
        MapProduct[id].hashIpfsDetail = hashIpfsDetail;
    }

    function setImageProduct(uint256 idProduct, string memory imageProduct)
        public
        onlyOwner
    {
        MapProduct[idProduct].imageProduct.push(imageProduct);
    }

    function getImageProduct(uint256 idProduct)
        external
        view
        returns (string[] memory)
    {
        return MapProduct[idProduct].imageProduct;
    }

    function setCommentProduct(
        uint256 idProduct,
        uint256 idComment,
        string memory content,
        uint256 startVote,
        string memory dateTime
    ) public {
        MapProduct[idProduct].commentProduct[idComment] = CommentProduct(
            msg.sender,
            content,
            startVote,
            dateTime
        );
    }

    function getCommentProduct(uint256 idProduct, uint256 idComment)
        external
        view
        returns (
            address,
            string memory,
            uint256,
            string memory
        )
    {
        return (
            MapProduct[idProduct].commentProduct[idComment].addressComment,
            MapProduct[idProduct].commentProduct[idComment].content,
            MapProduct[idProduct].commentProduct[idComment].startVote,
            MapProduct[idProduct].commentProduct[idComment].dateTime
        );
    }

    //------------------------User-----------------------------
    mapping(address => User) public MapUser;
    address[] ArrayUser;
    struct User {
        uint256[] arrayProduct;
        uint256 AvengeStart;
        string nameUser;
        string addressUser;
        string hashIpfsDetail;
        string phoneNumber;
        bool isSeller;
    }

    function setUser(
        string memory nameUser,
        string memory addressUser,
        string memory hashIpfsDetail,
        string memory phoneNumber
    ) public {
        ArrayUser.push(msg.sender);
        MapUser[msg.sender].AvengeStart = 0;
        MapUser[msg.sender].nameUser = nameUser;
        MapUser[msg.sender].addressUser = addressUser;
        MapUser[msg.sender].hashIpfsDetail = hashIpfsDetail;
        MapUser[msg.sender].phoneNumber = phoneNumber;
        MapUser[msg.sender].isSeller = false;
    }
}
