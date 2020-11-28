pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2; // contructer methot input string.

contract LinkedList {
    struct node {
        uint256 prev;
        uint256 data;
        uint256 next;
        uint256 isWork;
    }
    uint256 lengthList;
    uint256 nowNode;
    mapping(uint256 => node) public linkedList;

    constructor() public {
        linkedList[0].prev = 0;
        linkedList[0].data = 0;
        linkedList[0].next = 0;
        linkedList[0].isWork = 0;
        nowNode = 0;
        lengthList = 0;
    }

    function push(uint256 data) public {
        linkedList[nowNode + 1].prev = nowNode;
        linkedList[nowNode + 1].data = data;
        linkedList[nowNode + 1].next = 0;
        linkedList[nowNode + 1].isWork = 1;
        linkedList[nowNode].next = nowNode + 1;
        nowNode = nowNode + 1;
        lengthList = lengthList + 1;
    }

    function del(uint256 idNode) public {
        require(linkedList[idNode].isWork == 1, "You cant remove");
        uint256 idNodePrev = linkedList[idNode].prev;
        uint256 idNodeNext = linkedList[idNode].next;
        linkedList[idNodePrev].next = linkedList[idNode].next;
        linkedList[idNodeNext].prev = linkedList[idNode].prev;
        lengthList = lengthList - 1;
        linkedList[idNode].isWork = 0;
    }

    function length() public view returns (uint256) {
        return lengthList;
    }

    function select(uint256 idNode) external view returns (uint256[4] memory) {
        return (
            [
                linkedList[idNode].prev,
                linkedList[idNode].data,
                linkedList[idNode].next,
                linkedList[idNode].isWork
            ]
        );
    }

    function sellectAllId() public view returns (uint256[] memory) {
        uint256[] memory listData;
        uint256 next;
        next = linkedList[0].next;
        for (uint256 i = 0; i < lengthList; i++) {
            // listData[i] = linkedList[next].data;
            // next = linkedList[next].next;
            // if (next == 0) break;
            listData[i]=i;
        }
        return listData;
    }
}

contract LibraryDS {
    // ---------------------------libari-------------------------
    function ranId(address x) public view returns (string memory) {
        bytes memory s1 = new bytes(40);
        for (uint256 i = 15; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint256(x) / (2**(8 * (19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s1[2 * i] = char(hi);
            s1[2 * i + 1] = char(lo);
        }

        return subString(string(s1), uintToStr(ranUint(10000)));
    }

    function ranIdByAddress(address x) public view returns (uint256) {
        return ((now * 4**4 + (uint256(x) % 4**4))) * 10**4 + ranUint(4);
    }

    function ranUint(uint256 mod) public view returns (uint256) {
        return
            uint256(
                keccak256(abi.encodePacked(now, msg.sender, block.difficulty))
            ) % mod;
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    function addressToString(address x) public pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint256 i = 15; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint256(x) / (2**(8 * (19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s[2 * i] = char(hi);
            s[2 * i + 1] = char(lo);
        }
        return string(s);
    }

    function subString(string memory a, string memory b)
        public
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(a, b));
    }

    function char(bytes1 b) public pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x57);
    }

    function uintToStr(uint256 _i)
        public
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

contract GBA {
    LibraryDS libraryDS = new LibraryDS();
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    //------------------------Product------------------------
    LinkedList listProduct = new LinkedList();
    mapping(uint256 => Product) public MapProduct;
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

    function DBProduct_insert( // Insert product
        string memory title,
        uint256 price,
        uint256 unit,
        string memory category,
        uint256 discount,
        string memory soldAtLocation,
        string memory hashIpfsDetail,
        string memory hashIpfsImage
    ) public {
        uint256 idProduct = libraryDS.ranIdByAddress(msg.sender);
        listProduct.push(idProduct);
        DBUser_insertListProduct(msg.sender,idProduct);
        MapProduct[idProduct].title = title;
        MapProduct[idProduct].price = price;
        MapProduct[idProduct].unit = unit;
        MapProduct[idProduct].category = category;
        MapProduct[idProduct].datePost = now;
        MapProduct[idProduct].discount = discount;
        MapProduct[idProduct].soldAtLocation = soldAtLocation;
        MapProduct[idProduct].hashIpfsDetail = hashIpfsDetail;
        MapProduct[idProduct].imageProduct.push(hashIpfsImage);
        MapProduct[idProduct].seller = msg.sender;
    }
     function random( // Insert product
    )  external
        view
        returns(uint256){
       return libraryDS.ranIdByAddress(msg.sender);
    }
    

    function DBProduct_update(
        uint256 idProduct,
        string memory title,
        uint256 price,
        uint256 unit,
        string memory category,
        uint256 discount,
        string memory soldAtLocation,
        string memory hashIpfsDetail
    ) public {
        require(msg.sender == MapProduct[idProduct].seller,"Product not belong you");
        MapProduct[idProduct].title = title;
        MapProduct[idProduct].price = price;
        MapProduct[idProduct].unit = unit;
        MapProduct[idProduct].category = category;
        MapProduct[idProduct].datePost = now;
        MapProduct[idProduct].discount = discount;
        MapProduct[idProduct].soldAtLocation = soldAtLocation;
        MapProduct[idProduct].hashIpfsDetail = hashIpfsDetail;
        MapProduct[idProduct].seller = msg.sender;
    }

    function DBProduct_setProductDiscount(uint256 idProduct, uint256 discount)
        public
    {
        require(msg.sender == MapProduct[idProduct].seller,"Product not belong you");
        require(discount >= 0, "Discount have to bigger 0%");
        MapProduct[idProduct].discount = discount;
    }

    function DBProduct_addImageProduct(
        uint256 idProduct,
        string memory imageProduct
    ) public {
        require(msg.sender == MapProduct[idProduct].seller,"Product not belong you");
        MapProduct[idProduct].imageProduct.push(imageProduct);
    }

    function DBProduct_getImageProduct(uint256 idProduct)
        external
        view
        returns (string[] memory)
    {
        return MapProduct[idProduct].imageProduct;
    }
   
     function getIdNodeto5(uint256 start) external view returns(string memory){
        string memory listId;
        uint256 next;
        next = listProduct.select(start)[2];
        string memory data;
        data = libraryDS.uintToStr(listProduct.select(next)[1]);
        for(uint256 i = start;i<start+5;i++){
            listId = libraryDS.subString(listId,libraryDS.subString(data,","));
            next = listProduct.select(next)[2];
            if(next == 0 ) break;
        }
        return listId;
    }

    function DBProduct_setCommentProduct(
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

    function DBProduct_getCommentProduct(uint256 idProduct, uint256 idComment)
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

    //------------------------User---------------------------
    LinkedList listUser = new LinkedList();
    mapping(uint256 => User) public MapUser;
    struct User {
        uint256 [] UserlistProduct;
        uint256 AvengeStart;
        string nameUser;
        string addressUser;
        string hashIpfsDetail;
        string phoneNumber;
        bool isSeller;
    }

    function DBUser_active() public {
        uint256 addressUint = uint256(msg.sender);
        listUser.push(addressUint);
    }

    function DBUser_update(
        string memory nameUser,
        string memory addressUser,
        string memory phoneNumber,
        string memory hashIpfsDetail
    ) public {
        uint256 addressUint = uint256(msg.sender);
        // require(listUser.select(addressUint)[3] == 1, "You are not active");
        MapUser[addressUint].AvengeStart = 0;
        MapUser[addressUint].nameUser = nameUser;
        MapUser[addressUint].addressUser = addressUser;
        MapUser[addressUint].hashIpfsDetail = hashIpfsDetail;
        MapUser[addressUint].phoneNumber = phoneNumber;
        MapUser[addressUint].isSeller = false;
    }

    function DBUser_sellect(address address_)
        external
        view
        returns (
            // uint256 [] memory,
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            bool
        )
    {
        uint256 addressUser = uint256(address_);
        return (
            // MapUser[addressUser].listProduct.sellectAlldata,
            MapUser[addressUser].AvengeStart,
            MapUser[addressUser].nameUser,
            MapUser[addressUser].addressUser,
            MapUser[addressUser].hashIpfsDetail,
            MapUser[addressUser].phoneNumber,
            MapUser[addressUser].isSeller
        );
    }
    
    function getAddressUint256(address address_) 
        external
        view
        returns(uint256){
        return uint256(address_);
    }
    function DBUser_insertListProduct(address address_, uint256 idProduct)
        public
    {
        uint256 addressUser = uint256(address_);
        MapUser[addressUser].UserlistProduct.push(idProduct);
    }
     function DBUser_getListProduct(uint256 address_)
        external
        view
        returns (uint256[] memory)
    {
        return MapUser[address_].UserlistProduct;
    }
   
    function DBUser_updateUserIsSeller(address address_, bool isSeller) public onlyOwner{
        uint256 addressUser = uint256(address_);
        MapUser[addressUser].isSeller = isSeller;
    }

    // -----------------------Oder---------------------------
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

    function DBOder_insert(
        uint256 idOrder,
        address buyer,
        address seller,
        uint256 idProduct,
        uint256 price,
        uint256 numberProduct,
        string memory note
    ) public {
        ArrayOrder.push(idOrder);
        MapOrder[idOrder].buyer = buyer;
        MapOrder[idOrder].idProduct = idProduct;
        MapOrder[idOrder].dateTime = now;
        MapOrder[idOrder].seller = seller;
        MapOrder[idOrder].numberProduct = numberProduct;
        MapOrder[idOrder].price = price;
        MapOrder[idOrder].totalValue = MapOrder[idOrder].price * numberProduct;
        MapOrder[idOrder].note = note;
        MapOrder[idOrder].ispay = false;
    }
}
