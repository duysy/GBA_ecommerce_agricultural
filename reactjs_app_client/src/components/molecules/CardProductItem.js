import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { StartRate } from "../atoms"

export default class extends Component {
    render() {
        return (
            <div className="CardProductItem">
                <div className="CardProductImage">
                    <img src={this.props.urlImage} alt="" />
                </div>
                <div className="CardProductTitle">
                    <h5>{String(this.props.titleProduct).length < 30 ? String(this.props.titleProduct) : String(this.props.titleProduct).substring(0, 45) + "..."}</h5>
                </div>
                <div className="CardProductPrice">
                    <nav>{this.props.price} VND</nav>
                </div>
                <StartRate numberStar={this.props.starVote} />
                {this.props.location ? <div className="CardProductLocation">
                    {this.props.location}
                </div> : ""}

            </div>
        );
    }
}