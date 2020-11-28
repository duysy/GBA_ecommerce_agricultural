import React, { Component } from "react";
import "./styles.css";
import {Link} from "react-router-dom"

export default class extends Component {
    render() {
        return (
            <div className="CartProductItem">
                <div className="CartProductImg">
                    <img src={this.props.urlImage} alt="" />
                </div>
                <div className="CartProductDetails">
                    <div className="CartProductName">
                        <Link to={"/Product/"+this.props.idProduct}>{String(this.props.ProductName).length < 50 ? String(this.props.ProductName) : String(this.props.ProductName).substring(0, 60) + "..."}</Link>
                    </div>
                    <div className="CartProductDescription">
                        {this.props.ProductDescription}
                    </div>
                    <div className="CartProductPriceAmount">
                        <div className="CartProductPrice">
                            {this.props.price} VND
                        </div>
                        <div className="CartProductAmount">
                            Số lượng:{this.props.amount}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}