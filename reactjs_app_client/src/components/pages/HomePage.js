import React, { Component } from "react"
import "./styles.css";
import { HeaderHome, BannerSliderWrap, HomeTabbar, CardHeader, CardProductItem } from "../molecules";
const listProduct = [
    {
        titleProduct: "0Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        starVote: "3",
    },
    {
        titleProduct: "1Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        starVote: "3",
        location: "Ho Chi Minh"
    },
    {
        titleProduct: "2Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        starVote: "3",
    },
    {
        titleProduct: "3Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        starVote: "3",
        location: "Ho Chi Minh"
    },
    {
        titleProduct: "4Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
        urlImage: "https://loremflickr.com/300/300",
        price: "34.8479",
        starVote: "3",
    }
]
export default class extends Component {
    render() {
        return (
            <div className="HomePage">
                <HeaderHome />
                <div className="BannerSlide">
                    <BannerSliderWrap />
                </div>
                <HomeTabbar />
                <CardHeader>Top giảm giá</CardHeader>
                <div className="topSellContent">
                    <div className="topSellContentScroll">
                        {
                            listProduct.map((item, index) => {
                                return <CardProductItem
                                    key={index}
                                    titleProduct={item.titleProduct}
                                    urlImage={item.urlImage}
                                    price={item.price}
                                    starVote={item.starVote}
                                    location={item.location}
                                />
                            })
                        }
                    </div>
                </div>
                <CardHeader>Sản phẩm vừa list</CardHeader>
                <div className="topSellContent">
                    <div className="topSellContentScroll">
                        {
                            listProduct.map((item, index) => {
                                return <CardProductItem
                                    key={index}
                                    titleProduct={item.titleProduct}
                                    urlImage={item.urlImage}
                                    price={item.price}
                                    starVote={item.starVote}
                                    location={item.location}
                                />
                            })
                        }
                    </div>
                </div>
                <CardHeader>Sản phầm bán nhiều</CardHeader>
                <div className="cardGrid">
                    <div className="cardGrid-odd">
                        {
                            listProduct.map((item, index) => {
                                if (index % 2) {
                                    return <CardProductItem
                                        key={index}
                                        titleProduct={item.titleProduct}
                                        urlImage={item.urlImage}
                                        price={item.price}
                                        starVote={item.starVote}
                                        location={item.location}
                                    />
                                }
                            })
                        }
                    </div>
                    <div className="cardGrid-even">
                        {
                            listProduct.map((item, index) => {
                                if (~index % 2) {
                                    return <CardProductItem
                                        key={index}
                                        titleProduct={item.titleProduct}
                                        urlImage={item.urlImage}
                                        price={item.price}
                                        starVote={item.starVote}
                                        location={item.location}
                                    />
                                }
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}