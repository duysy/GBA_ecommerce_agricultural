import react, { Component } from "react"
import "./styles.css"
import { HeaderHome, HomeTabbar, ProductDetails, ProductDetailsMore, Comment  } from "../molecules";

const product = {
    titleProduct: "1. Áo Khoác, Áo Khoác HOODIE Unisex Nam Nữ",
    urlImage: "https://loremflickr.com/300/300",
    price: "34.8479",
    starVote: "4",
    description: [
        {
            title: "Khuyễn mãi",
            brief: "Giảm ngay 19K cho đơn 99K ZaloPay",
            infor: "Giảm ngay 19K cho đơn từ 99K từ 01/11/2020 đến 30/11/2020 (Mỗi khách được sử dụng 2 lần)"
        },
        {
            title: "Đặc tính",
            brief: "Thương hiệu,SMS hoặc Email,Nội dung",
            infor: "Giảm ngay 19K cho đơn từ 99K từ 01/11/2020 đến 30/11/2020 (Mỗi khách được sử dụng 2 lần)"
        },
        {
            title: "Giao hàng",
            brief: "Tin nhắn sẽ được gửi đến số điện thoại của bạn trong vòng 24 giờ.",
            infor: "Giảm ngay 19K cho đơn từ 99K từ 01/11/2020 đến 30/11/2020 (Mỗi khách được sử dụng 2 lần)"
        },
    ]
}

const comments = [
    {
        id: "1",
        name: "Messi",
        content: "Hay quá ạ",
        image: [
            "https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg"
        ],
        starVote: "4",
        dayComment: "1/11/2020"
    },
    {
        id: "2",
        name: "Công Phượng",
        content: "Hay quá ạ",
        image: [
            "https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg"
        ],
        starVote: "4",
        dayComment: "1/11/2020"
    },
    {
        id: "3",
        name: "Ronaldo",
        content: "Hay quá ạ",
        image: [
            "https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg",
            "https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg"
        ],
        starVote: "5",
        dayComment: "1/11/2020"
    },

]

export default class extends Component {
    render() {
        return(
            <div className="ProductDetails">
                <HeaderHome />
                <ProductDetails 
                    urlImage = {product.urlImage}
                    price = {product.price}
                    titleProduct = {product.titleProduct}
                    starVote={product.starVote}
                />
                <div className="ProductDetailsMorePage">
                    {
                        product.description.map((item, index) => {
                            return <ProductDetailsMore 
                                title = {item.title}
                                brief = {item.brief}
                                infor = {item.infor}
                            />
                        })
                    }
                </div>
                <div className="ProductDetailsComment">
                    <div className="ProductDetailsCommentGeneral">
                        <div className="ProductDetailsCommentTotal">
                            Nhận xét và đánh giá (1000)
                        </div>
                        <div className="ProductDetailsCommentViewAll">
                            <i>Xem tất cả</i>
                        </div>
                    </div>
                    {
                        comments.map((item, index) => {
                            return <Comment 
                                key = {index}
                                name = {item.name}
                                dayComment = {item.dayComment}
                                content = {item.content}
                                starVote = {item.starVote}
                            />
                        })
                    }
                </div>
                <HomeTabbar />
            </div>
        )
    }
}