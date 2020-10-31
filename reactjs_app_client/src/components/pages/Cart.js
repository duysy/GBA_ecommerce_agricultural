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
                <div className="CartWrap">
                    <div className="CartDestination">
                        <div className="CartDestinationIcon">
                            <i class="fa fa-shopping-cart"></i>
                        </div>
                        <div className="CartDestinationLocation">
                            Phường Hòa Quý, Quận Ngũ Hành Sơn, TP. Đà Nẵng
                        </div>
                        <div className="CartDestinationChangeLocation">
                            CHANGE
                        </div>
                    </div>
                    <div className="CartProducts">
                        <div className="CartDistributor">
                            <div>
                                <input type="checkbox" />
                                <span>MUA NGAY FASHION</span>
                            </div>
                        </div>  
                        {
                            listProduct.map((item, index) => {
                                return <Cart 
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
                    <div className="CartPayment">
                        <div className="CartSelectAll">
                            <input type="checkbox" name="" id="CartSelectAllInput"/>
                            <label htmlFor="CartSelectAllInput">Tất cả</label>
                        </div>
                        <div className="CartFeeWrap">
                            <div className="CartFee">
                                <div className="CartFeeShip">
                                    Phí vận chuyển: 0đ
                                </div>
                                <div className="CartFreeTotal">
                                    Tổng cộng: 0đ
                                </div>
                            </div>
                            <div className="CartPaymentBtn">
                                <button>
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeTabbar />
            </div>
        )
    }
}