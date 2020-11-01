import React, { Component } from "react";
import "./styles.css";
import { StartRate } from "../atoms"

export default class extends Component {
    render() {
        return(
            <div>
                <div className="ProductDetailsImgWrap">
                    <img src={this.props.urlImage} alt=""/>
                    <div className="ProductDetailsOption">
                        <div className="ProductDetailsOptionItem">
                            <div className="ProductDetailsOptionItemChild">
                                <i class="fa fa-arrow-left left-arrow"></i>
                            </div>
                        </div>
                        <div className="ProductDetailsOptionItem">
                            <div className="ProductDetailsOptionItemChild">
                                <i class="fa fa-shopping-cart cart"></i>
                            </div>
                            <div className="ProductDetailsOptionItemChild">
                                <i class="fa fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ProductDetailsInfor">
                    <div className="ProductDetailsPriceShare">
                        <div className="ProductDetailsPrice">
                            {this.props.price} VNĐ
                        </div>
                        <div className="ProductDetailsShare">
                            <i class="fa fa-heart heart"></i>
                            <i class="fa fa-share-alt share"></i>
                        </div>
                    </div>
                    <div className="ProductDetailstitle">
                        {this.props.titleProduct}
                    </div>
                    <div className="ProductDetailsRate">
                        <StartRate numberStar={this.props.starVote} />
                         <span>({this.props.starVote})</span>
                    </div>
                </div>
            </div>
        )
    }
}