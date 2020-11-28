import React, { Component } from "react";
import "./styles.css";
import { getAddressUint256, DBUser_getListProduct, getInforProduct, DBProduct_getImageProduct } from "../../contract/getData"
import { DBProduct_insert } from "../../contract/rawData"
import { HomeTabbar, CardProductItem, CardProduct } from "../molecules";

const listProduct = [
    {
        ProductName: '1.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    }
]


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: []
        }
    }
    async componentDidMount() {
        let data = [];
        let listIdProduct = await DBUser_getListProduct(await getAddressUint256());
        listIdProduct.map(async (value, index) => {
            let listImage = await DBProduct_getImageProduct(value);
            let inforProduct = await getInforProduct(value);
            // console.log(inforProduct);
            data.push({
                idProduct:value,
                ProductName: inforProduct.title,
                category: inforProduct.category,
                urlImage: "https://gateway.pinata.cloud/ipfs/"+listImage[0],
                price: inforProduct.price,
                amount: inforProduct.unit
            })
            this.setState({
                listProduct:data
            })
        })


    }
    render() {
        return (
            <div className="Carts">
                <HomeTabbar />
                <div className="CartWrap">

                    <div className="CartProducts">
                        {
                            this.state.listProduct.map((item, index) => {
                                return <CardProduct
                                    key={index}
                                    idProduct={item.idProduct}
                                    urlImage={item.urlImage}
                                    ProductName={item.ProductName}
                                    category={item.category}
                                    price={item.price}
                                    amount={item.amount}
                                />
                            })
                        }
                    </div>
                </div>
                <HomeTabbar />
            </div>
        )
    }
}
