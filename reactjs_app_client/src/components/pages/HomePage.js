import React, { Component } from "react"
import "./styles.css";
import { HeaderHome, BannerSliderWrap, HomeTabbar, CardHeader, CardProductItem } from "../molecules";
import { getAllIdProduct } from "../../contract/getData";
const listProduct = [
    {
        titleProduct: "Tiêu đen Quảng Trị",
        urlImage: "https://cf.shopee.vn/file/81e468020961179d72a17eb8d7897ebf_tn",
        price: "55,000",
        starVote: "4",
    },
    {
        titleProduct: "Tiêu đen sạch",
        urlImage: "https://cf.shopee.vn/file/3f64aee65b71f37954e581f040b5ce76_tn",
        price: "60,000",
        starVote: "3",
        location: "Ho Chi Minh"
    },
    {
        titleProduct: "Chanh ta",
        urlImage: "https://cdn.vinagex.com/image.php?src=images/5c36f45fac210c6cd07f0b32/product/5c64b3ad07230.png&size=370x300",
        price: "55,000",
        starVote: "3",
    },
    {
        titleProduct: "Dâu tây Cò Nòi",
        urlImage: "https://cdn.vinagex.com/image.php?src=images/5c130c90ac210c5e746b70b2/product/5c13107b33375.png&size=370x300",
        price: "45,000",
        starVote: "3",
        location: "Ho Chi Minh"
    },
    {
        titleProduct: "Bưởi đỏ Tân Lạc",
        urlImage: "https://cdn.vinagex.com/image.php?src=images/5c11d89dac210c11195ecaf2/product/5c11e1128e8a1.png&size=370x300",
        price: "10,000 - 28,000",
        starVote: "3",
    }
]
export default class extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        console.log(await getAllIdProduct());
    }
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