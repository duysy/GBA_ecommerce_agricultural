import React, { Component } from "react";
import "./styles.css";
import { HomeTabbar, CardProductItem, CardOder } from "../molecules";

const listProduct = [
    {
        ProductName: '1.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
    {
        ProductName: '2.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
    {
        ProductName: '3.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '100'
    },
    {
        ProductName: '4.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
    {
        ProductName: '5.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
    {
        ProductName: '6.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
    {
        ProductName: '7.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
    {
        ProductName: '8.Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ',
        ProductDescription: 'Màu xanh đen',
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        amount: '1'
    },
]

export default class extends Component {
    render() {
        return (
            <div className="Carts">
                <HomeTabbar />
                <div className="CartWrap">
                   
                    <div className="CartProducts">
                        {
                            listProduct.map((item, index) => {
                                return <CardOder 
                                    key = {index}
                                    urlImage = {item.urlImage}
                                    ProductName = {item.ProductName}
                                    ProductDescription = {item.ProductDescription}
                                    price = {item.price}
                                    amount = {item.amount}
                                />
                            })
                        }
                    </div>
                    <div className="CartVoucher">
                        <form action="" className="CartVoucherForm">
                            <input type="text" placeholder="Mã giảm giá"/>
                            <button type="submit">Áp dụng</button>
                        </form>
                    </div>
                </div>
                <HomeTabbar />
            </div>
        )
    }
}
