import React, { Component } from "react";
import "./styles.css";
import { HeaderHome, BannerSliderWrap, HomeTabbar, CardHeader, CardProductItem, Cart } from "../molecules";

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
        amount: '1'
    },
]

export default class extends Component {
    render() {
        return (
            <div className="Carts">
                <HeaderHome />
                <div className="Categories">

                </div>
                <HomeTabbar />
            </div>
        )
    }
}