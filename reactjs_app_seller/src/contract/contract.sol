pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2; // contructer methot input string.
import "https://raw.githubusercontent.com/smartcontractkit/chainlink/develop/evm-contracts/src/v0.6/ChainlinkClient.sol";

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
    uint256[] private ArrayIdProduct;
    struct Product {
        string title;
        uint256 price;
        uint256 unit;
        string category;
        uint256 datePost;
        uint256 discount;
        string soldAtLocation;
        string hashIpfsDetail;
        string[] imageProduct;
        mapping(uint256 => CommentProduct) commentProduct;
        address seller;
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
        uint256 datePost,
        uint256 discount,
        string memory soldAtLocation,
        string memory hashIpfsDetail
    ) public onlySeller {
        ArrayIdProduct.push(id);
        addProductToUser(id);
        MapProduct[id].title = title;
        MapProduct[id].price = price;
        MapProduct[id].unit = unit;
        MapProduct[id].category = category;
        MapProduct[id].datePost = now;
        MapProduct[id].discount = discount;
        MapProduct[id].soldAtLocation = soldAtLocation;
        MapProduct[id].hashIpfsDetail = hashIpfsDetail;
        MapProduct[id].seller = msg.sender;
    }

    function setProductDiscount(uint256 idProduct, uint256 discount)
        public
        onlySeller
    {
        MapProduct[idProduct].discount = discount;
    }

    function addImageProduct(uint256 idProduct, string memory imageProduct)
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

    function getAllIdProduct() external view returns (uint256[] memory) {
        return ArrayIdProduct;
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
    mapping(address => User) private MapUser;
    address[] private ArrayUser;
    struct User {
        uint256[] arrayProduct;
        uint256 AvengeStart;
        string nameUser;
        string addressUser;
        string hashIpfsDetail;
        string phoneNumber;
        bool isSeller;
    }

    function setUserInfo(
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

    function getUserInfo(address addressUser)
        external
        view
        returns (
            uint256[] memory,
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            bool
        )
    {
        return (
            MapUser[addressUser].arrayProduct,
            MapUser[addressUser].AvengeStart,
            MapUser[addressUser].nameUser,
            MapUser[addressUser].addressUser,
            MapUser[addressUser].hashIpfsDetail,
            MapUser[addressUser].phoneNumber,
            MapUser[addressUser].isSeller
        );
    }

    function addProductToUser(uint256 idMappingProduct) private {
        MapUser[msg.sender].arrayProduct.push(idMappingProduct);
    }

    function setUserIsSeller(address addressUser, bool isSeller)
        public
        onlyOwner
    {
        MapUser[addressUser].isSeller = isSeller;
    }

    modifier onlySeller {
        require(MapUser[msg.sender].isSeller == true, "You are not a seller");
        _;
    }

    function delIteamProduct(uint256 index) public {
        delete ArrayIdProduct[index];
    }

    function getAllUser() external view returns (address[] memory) {
        return ArrayUser;
    }

    // ------------------------------Oder-------------------------------
    mapping(uint256 => Order) public MapOrder;
    uint256[] ArrayOrder;
    struct Order {
        address buyer;
        uint256 idProduct;
        uint256 dateTime;
        address seller;
        uint256 numberProduct;
        uint256 price;
        uint256 totalValue;
        string note;
        string state;
        bool ispay;
    }

    function setUserInfo(
        uint256 idOrder,
        address buyer,
        uint256 idProduct,
        uint256 numberProduct,
        string memory note
    ) public {
        ArrayOrder.push(idOrder);
        MapOrder[idOrder].buyer = msg.sender;
        MapOrder[idOrder].dateTime = now;
        MapOrder[idOrder].seller = MapProduct[idProduct].seller;
        MapOrder[idOrder].numberProduct = numberProduct;
        MapOrder[idOrder].price = MapProduct[idProduct].price;
        MapOrder[idOrder].totalValue = MapOrder[idOrder].price * numberProduct;
        MapOrder[idOrder].note = note;
        MapOrder[idOrder].ispay = false;
    }

    // ---------------------------libari-------------------------

    function subString(string memory a, string memory b)
        private
        view
        returns (string memory)
    {
        return string(abi.encodePacked(a, b));
    }

    function genRandom(uint256 mod) public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(now, msg.sender))) % mod;
    }

    function uintToStr(uint256 _i)
        internal
        pure
        returns (string memory _uintAsString)
    {
        uint256 number = _i;
        if (number == 0) {
            return "0";
        }
        uint256 j = number;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len - 1;
        while (number != 0) {
            bstr[k--] = bytes1(uint8(48 + (number % 10)));
            number /= 10;
        }
        return string(bstr);
    }
}
