import React, { Component } from "react";
import "./styles.css";

export default class extends Component {
    render() {
        return (
            <div className="CartProductItem">
                <input type="checkbox" name="" id="" className="CartProductCheckBox"/>
                <div className="CartProductImg">
                    <img src={ this.props.urlImage } alt=""/>
                </div>
                <div className="CartProductDetails">
                    <div className="CartProductName">
                        {String(this.props.ProductName).length < 50 ? String(this.props.ProductName) : String(this.props.ProductName).substring(0, 60) + "..."}
                    </div>
                    <div className="CartProductDescription">
                        { this.props.ProductDescription }
                    </div>
                    <div className="CartProductPriceAmount">
                        <div className="CartProductPrice">
                            { this.props.price } VND
                        </div>
                        <div className="CartProductAmount">
                            <div className="CartProductChangeAmount">
                                -
                            </div>
                            <div className="CartProductCurrentAmount">
                                { this.props.amount }
                            </div>
                            <div className="CartProductChangeAmount">
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}