import React, { Component } from "react"
import { TestAtom } from "./atoms";
import { HeaderHome, BannerSliderWrap, HomeTabbar, CardHeader, CardProductItem } from "./molecules";
import { TestPages } from "./pages";
const listProduct = {
    titleProduct: "Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
    urlImage: "https://loremflickr.com/300/300",
    price: "34.8479",
    starVote: "3",
    location: "Ho Chi Minh"
}
export default class extends Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <BannerSliderWrap />
                <HomeTabbar />
                <CardHeader>CardHeader</CardHeader>
                <CardProductItem
                    titleProduct={listProduct.titleProduct}
                    urlImage={listProduct.urlImage}
                    price={listProduct.price}
                    starVote={listProduct.starVote}
                    location={listProduct.location}
                />
            </div>
        );
    }
}