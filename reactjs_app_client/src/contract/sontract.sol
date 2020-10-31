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
            string discount;
            string soldAtLocation;
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
            uint memory discount,
            string memory soldAtLocation,
            string memory hashIpfsDetail
        ) public onlySeller {
            ArrayIdProduct.push(id);
            addProductToUser(id);
            MapProduct[id].title = title;
            MapProduct[id].price = price;
            MapProduct[id].unit = unit;
            MapProduct[id].category = category;
            MapProduct[id].datePost = datePost;
            MapProduct[id].discount = discount;
            MapProduct[id].soldAtLocation = soldAtLocation;
            MapProduct[id].hashIpfsDetail = hashIpfsDetail;
        }
        function setProductDiscount(
            uint256 idProduct,
            uint discount) public onlySeller {
            MapProduct[idProduct].discount = discount,
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
                uint256 [] memory,
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
        function setUserIsSeller(address addressUser,bool isSeller)public onlyOwner{
            MapUser[addressUser].isSeller=isSeller;
        }
        modifier onlySeller {
             require(MapUser[msg.sender].isSeller == true,"You are not a seller");
            _;
        }
    }
