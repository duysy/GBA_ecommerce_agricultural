import react, { Component } from "react";
import "./styles.css";
import { StartRate } from "../atoms";

export default class extends Component {
    render() {
        return (
            <div className="ProductDetailsCommentWrap">
                <div className="ProductDetailsCommentInfor">
                    <div className="ProductDetailsCommentNameDay">
                        <div className="ProductDetailsCommentName">
                            { this.props.name }
                        </div>
                        <div className="ProductDetailsCommentDay">
                             - { this.props.dayComment }
                        </div>
                    </div>
                    <div className="ProductDetailsCommentRate">
                        <StartRate numberStar={ this.props.starVote } />
                    </div>
                </div>
                <div className="ProductDetailsCommentContent">
                    <div className="ProductDetailsCommentContentText">
                        { this.props.content }
                    </div>
                    <div className="ProductDetailsCommentContentImg">
                        <img src="https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg" alt=""/>
                        <img src="https://loremflickr.com/cache/resized/65535_50488056162_04ebb8bd48_300_300_nofilter.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}