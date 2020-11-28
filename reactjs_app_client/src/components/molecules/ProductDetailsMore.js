import react, { Component } from "react";
import "./styles.css"

export default class extends Component {
    render() {
        return (
            <div className="ProductDetailsMoreWrap">
                <div className="ProductDetailsMoreTitle">
                    { this.props.title }
                </div>
                <div className="ProductDetailsMoreInfor">
                    { this.props.brief }
                </div>
                <div className="ProductDetailsMoreShow">
                    <i class="fa fa-chevron-right"></i>
                </div>
            </div>
        )
    }
}